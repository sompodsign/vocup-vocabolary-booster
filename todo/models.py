import datetime

from django.contrib.auth import get_user_model
from django.db import models

user = get_user_model()


# Create your models here.
class TimeStampedModel(models.Model):
    """
    An abstract base class model that provides self updating ``created`` and ``modified`` fields.
    """
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class TodoCategory(TimeStampedModel):
    """
    A model that represents a category for a todo item.
    """
    name = models.CharField(max_length=255)
    user = models.ForeignKey(user, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Todo(TimeStampedModel):
    """
    A model representing a todo item.
    """
    category = models.ForeignKey(TodoCategory, on_delete=models.CASCADE, related_name='todos', blank=True, null=True)
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    reminder = models.DateTimeField(null=True, blank=True)
    repeat_every = models.IntegerField(default=0)
    repeat_until = models.DateTimeField(null=True, blank=True)
    repeated_date = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.repeat_every > 0:
            self.repeat_until = datetime.datetime.now() + datetime.timedelta(days=365)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
