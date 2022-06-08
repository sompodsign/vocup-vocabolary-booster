from django.conf import settings
from django.core.management.base import BaseCommand

from quickorganics.users.models import User


class Command(BaseCommand):
    help = 'Create admin users.'

    def handle(self, *args, **options):
        for _, email in settings.ADMINS:
            try:
                User.objects.get(email=email, is_superuser=True)
            except User.DoesNotExist:
                User.objects.create_superuser(email, settings.DEFAULT_ADMIN_PASSWORD)
