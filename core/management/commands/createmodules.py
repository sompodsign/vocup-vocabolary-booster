from django.conf import settings
from django.core.management.base import BaseCommand

from quickorganics.modules.models import Module


class Command(BaseCommand):
    help = 'Create Modules'

    def handle(self, *args, **options):
        for identifier, name in settings.MODULES:
            try:
                Module.objects.get(identifier=identifier)
            except Module.DoesNotExist:
                Module.objects.create(
                    identifier=identifier,
                    name=name
                )
