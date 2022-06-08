from django.core.management.base import BaseCommand

from quickorganics.osp.models import OSP


class Command(BaseCommand):
    help = 'Update OSP names'

    def handle(self, *args, **options):
        OSP.objects.all().update(name='OSP-1')
