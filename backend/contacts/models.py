from django.db import models
import uuid
from django.utils.text import slugify


class Contact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    GENDER_CHOICES = [
        ("male", "Masculino"),
        ("female", "Feminino"),
    ]

    first_name = models.CharField(max_length=100, verbose_name="Nome")
    last_name = models.CharField(max_length=100, verbose_name="Sobrenome")
    email = models.CharField(max_length=100, verbose_name="E-mail")
    language = models.CharField(max_length=100, verbose_name="Idioma")
    gender = models.CharField(
        max_length=10, choices=GENDER_CHOICES, verbose_name="Gênero"
    )
    birthdate = models.DateField(verbose_name="Data de Nascimento")
    avatar = models.ImageField(
        upload_to="",
        null=True,
        default="default_user.webp",
    )
    slug = models.SlugField(unique=True, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f"{self.first_name}-{self.last_name}-{self.email}")
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "Contato"
        verbose_name_plural = "Contatos"
