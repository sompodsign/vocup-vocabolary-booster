from django.utils import timezone

from django.contrib.auth import get_user_model
from django.db import models


# Create your models here.


user = get_user_model()


class TimeStampedModel(models.Model):
    """
    This class is used to store the time and date of the model instance.
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Word(TimeStampedModel):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    word = models.CharField(max_length=100)
    meaning = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.word

    class Meta:
        ordering = ['-created_at']
