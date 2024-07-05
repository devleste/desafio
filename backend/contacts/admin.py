import os
from django.contrib import admin
from django.contrib import admin
from django.utils.html import format_html
from contacts.models import Contact
from dotenv import load_dotenv

load_dotenv()


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = [
        "avatar_preview",
        "first_name",
        "last_name",
        "email",
        "birthdate",
        "language",
        "gender",
    ]

    list_display_links = ["first_name"]
    list_editable = ["language", "gender"]

    def avatar_preview(self, obj):

        return format_html(
            """<div style="display: flex; align-items: center; gap: 4px">
                <img style='width: 50px; height: 50px; border-radius: 50%;object-fit: cover; background-color: white; border: 2px solid #417690' src='{}/{}/{}'/>
            </div>""",
            os.environ.get("MEDIA_URL"),
            os.environ.get("GS_BUCKET_NAME"),
            str(obj.avatar),
        )

    avatar_preview.short_description = "Imagem"
