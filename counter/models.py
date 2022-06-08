from django.db import models
from core.models import UUIDMixin


# Create your models here.

class Counter(UUIDMixin):
    name = models.CharField(max_length=255, unique=True)
    count = models.PositiveSmallIntegerField(default=1)

    def __str__(self):
        return f'{self.id} - {self.count}'
