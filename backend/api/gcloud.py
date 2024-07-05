from django.conf import settings
from storages.backends.gcloud import GoogleCloudStorage
from storages.utils import setting
from urllib.parse import urljoin


class GoogleCloudMediaFileStorage(GoogleCloudStorage):
    def __init__(self, *args, **kwargs):
        kwargs["bucket_name"] = settings.GS_BUCKET_NAME
        super().__init__(*args, **kwargs)

    def url(self, name):
        return urljoin(settings.MEDIA_URL, name)
