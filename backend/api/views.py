from rest_framework import generics
from rest_framework.response import Response
from contacts.models import Contact
from contacts.serializers import ContactSerializer
from django.views import View
import calendar
from django.utils import timezone
from datetime import timedelta
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework_api_key.permissions import HasAPIKey


@method_decorator(ensure_csrf_cookie, name="dispatch")
class CSRFTokenView(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({"detail": "CSRF cookie set"})


@method_decorator(csrf_exempt, name="dispatch")
class CreateContactView(View):
    permission_classes = [HasAPIKey]

    def post(self, request, *args, **kwargs):
        try:
            data = request.POST.dict()
            avatar_file = request.FILES.get("avatar")

            new_contact = Contact(
                first_name=data["first_name"],
                last_name=data["last_name"],
                email=data["email"],
                birthdate=data["birthdate"],
                gender=data["gender"],
                language=data["language"],
            )
            if avatar_file:
                new_contact.avatar.save(avatar_file.name, avatar_file)

            new_contact.save()
            return JsonResponse({"message": "Contact created successfully"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)


@method_decorator(csrf_exempt, name="dispatch")
class UpdateContactView(View):
    permission_classes = [HasAPIKey]

    def post(self, request, contact_id, *args, **kwargs):
        try:
            contact = Contact.objects.get(id=contact_id)
            data = request.POST.dict()
            avatar_file = request.FILES.get("avatar")

            contact.first_name = data.get("first_name", contact.first_name)
            contact.last_name = data.get("last_name", contact.last_name)
            contact.email = data.get("email", contact.email)
            contact.birthdate = data.get("birthdate", contact.birthdate)
            contact.gender = data.get("gender", contact.gender)
            contact.language = data.get("language", contact.language)
            if avatar_file:
                contact.avatar.save(avatar_file.name, avatar_file)

            contact.save()
            return JsonResponse({"message": "Contact updated successfully"})
        except Contact.DoesNotExist:
            return JsonResponse({"error": "Contact not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)


@method_decorator(csrf_exempt, name="dispatch")
class DeleteContactView(View):
    permission_classes = [HasAPIKey]

    def delete(self, request, contact_id, *args, **kwargs):
        try:
            contact = Contact.objects.get(id=contact_id)
            contact.delete()
            return JsonResponse({"message": "Contact deleted successfully"})
        except Contact.DoesNotExist:
            return JsonResponse({"error": "Contact not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


class ContactDetailView(generics.GenericAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
    permission_classes = [HasAPIKey]

    def get(self, request, *args, **kwargs):

        queryset = self.get_queryset()

        slug = request.query_params.get("slug")
        gender = request.query_params.get("gender")
        language = request.query_params.get("language")
        birth_month = request.query_params.get("birthMonth")
        age = request.query_params.get("age")

        birth_month_number = 0
        if birth_month:
            try:
                birth_month_number = list(calendar.month_name).index(
                    birth_month.capitalize()
                )
            except ValueError:
                print("Error")
                pass

        if slug:
            queryset = queryset.filter(slug__icontains=slug)
        if gender:
            queryset = queryset.filter(gender=gender)
        if language:
            queryset = queryset.filter(language__icontains=language)
        if birth_month_number:
            queryset = queryset.filter(birthdate__month=birth_month_number)

        if age:
            try:
                age = int(age) + 1
                today = timezone.now().date()
                min_birth_date = today - timedelta(
                    days=age * 365.25
                )  # Approximation of age in days
                queryset = queryset.filter(birthdate__gte=min_birth_date)
            except ValueError:
                print("Invalid age value")
                pass

        contacts = self.get_serializer(queryset, many=True).data

        response_data = {"contacts": contacts}
        return Response(response_data)
