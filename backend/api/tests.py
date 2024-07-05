import datetime
import uuid
from django.test import TestCase, Client
from django.urls import reverse
from django.core.files.uploadedfile import SimpleUploadedFile
from contacts.models import Contact


class CSRFTokenViewTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_csrf_token(self):
        response = self.client.get(reverse("csrf_token"))
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(response.content, {"detail": "CSRF cookie set"})
        self.assertIn("csrftoken", response.cookies)


class ContactDetailView(TestCase):
    def setUp(self):
        self.client = Client()
        self.contact1 = Contact.objects.create(
            first_name="John",
            last_name="Doe",
            email="john.doe@example.com",
            birthdate="1990-01-01",
            gender="male",
            language="English",
            slug="john-doe",
        )
        self.contact2 = Contact.objects.create(
            first_name="Jane",
            last_name="Smith",
            email="jane.smith@example.com",
            birthdate="1992-02-15",
            gender="female",
            language="French",
            slug="jane-smith",
        )

    def test_get_contacts_by_slug(self):
        url = reverse("contact_detail")
        response = self.client.get(url, {"slug": "john"})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["contacts"]), 1)
        self.assertEqual(response.json()["contacts"][0]["first_name"], "John")

    def test_get_contacts_by_gender(self):
        url = reverse("contact_detail")
        response = self.client.get(url, {"gender": "male"})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["contacts"]), 1)
        self.assertEqual(response.json()["contacts"][0]["first_name"], "John")

    def test_get_contacts_by_multiple_params(self):
        url = reverse("contact_detail")
        response = self.client.get(url, {"gender": "female", "language": "French"})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["contacts"]), 1)
        self.assertEqual(response.json()["contacts"][0]["first_name"], "Jane")

    def test_get_contacts_no_params(self):
        url = reverse("contact_detail")
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["contacts"]), 2)


class CreateContactViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.create_contact_url = reverse("create_contact")

    def test_create_contact(self):
        avatar = SimpleUploadedFile(
            "avatar.jpg", b"file_content", content_type="image/jpeg"
        )

        data = {
            "first_name": "John",
            "last_name": "Doe",
            "email": "john.doe@example.com",
            "birthdate": "1990-01-01",
            "gender": "male",
            "language": "English",
            "avatar": avatar,
        }

        response = self.client.post(self.create_contact_url, data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "Contact created successfully"})
        self.assertTrue(Contact.objects.filter(email="john.doe@example.com").exists())

    def test_create_contact_missing_required_fields(self):
        data = {
            "first_name": "John",
            "last_name": "Doe",
            "email": "",
            "birthdate": "",
            "gender": "",
            "language": "",
        }

        response = self.client.post(self.create_contact_url, data)
        self.assertIn("error", response.json())

        self.assertLess(
            int(response.status_code) - 400,
            100,
            "Response status code is a client error (4xx)",
        )


class UpdateContactViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.contact = Contact.objects.create(
            first_name="Jane",
            last_name="Doe",
            email="jane.doe@example.com",
            birthdate="1990-01-01",
            gender="female",
            language="English",
        )
        self.update_contact_url = reverse("update_contact", args=[self.contact.id])

    def test_update_contact(self):
        data = {
            "first_name": "John",
            "last_name": "Smith",
            "email": "john.smith@example.com",
            "birthdate": datetime.date(1990, 1, 1),
            "gender": "male",
            "language": "French",
        }

        response = self.client.post(self.update_contact_url, data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "Contact updated successfully"})

        self.contact.refresh_from_db()
        self.assertEqual(self.contact.first_name, "John")
        self.assertEqual(self.contact.last_name, "Smith")
        self.assertEqual(self.contact.email, "john.smith@example.com")
        self.assertEqual(self.contact.birthdate, datetime.date(1990, 1, 1))
        self.assertEqual(self.contact.gender, "male")
        self.assertEqual(self.contact.language, "French")

    def test_update_contact_non_existing(self):
        non_existing_id = uuid.uuid4()
        update_contact_url = reverse("update_contact", args=[non_existing_id])
        data = {"first_name": "John", "last_name": "Smith"}

        response = self.client.post(update_contact_url, data)

        self.assertEqual(response.json(), {"error": "Contact not found"})
        self.assertLess(
            int(response.status_code) - 400,
            100,
            "Response status code is a client error (4xx)",
        )

    def test_update_contact_with_avatar(self):
        avatar = SimpleUploadedFile(
            "avatar.jpg", b"file_context", content_type="image/jpeg"
        )

        data = {
            "first_name": "John",
            "last_name": "Smith",
            "email": "john.smith@example.com",
            "birthdate": datetime.date(1990, 1, 1),
            "gender": "male",
            "language": "French",
            "avatar": avatar,
        }

        response = self.client.post(self.update_contact_url, data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "Contact updated successfully"})
        self.contact.refresh_from_db()
        self.assertEqual(self.contact.first_name, "John")
        self.assertEqual(self.contact.last_name, "Smith")
        self.assertEqual(self.contact.email, "john.smith@example.com")
        self.assertTrue(self.contact.avatar)


class DeleteContactViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.contact = Contact.objects.create(
            first_name="Jane",
            last_name="Doe",
            email="jane.doe@example.com",
            birthdate="1990-01-01",
            gender="female",
            language="English",
        )
        self.delete_contact_url = reverse("delete_contact", args=[self.contact.id])

    def test_delete_contact(self):
        response = self.client.delete(self.delete_contact_url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "Contact deleted successfully"})

        with self.assertRaises(Contact.DoesNotExist):
            Contact.objects.get(id=self.contact.id)

    def test_delete_contact_non_existing(self):
        non_existing_id = uuid.uuid4()
        delete_contact_url = reverse("delete_contact", args=[non_existing_id])

        response = self.client.delete(delete_contact_url)
        self.assertLess(
            int(response.status_code) - 400,
            100,
            "Response status code is a client error (4xx)",
        )
        self.assertEqual(response.json(), {"error": "Contact not found"})
