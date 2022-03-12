import datetime

from django.contrib.auth import get_user_model
from django.db import models

user = get_user_model()
print(user.objects.all())

# Create your models here.
class TimeStampedModel(models.Model):
    """
    An abstract base class model that provides self updating ``created`` and ``modified`` fields.
    """
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Todo(TimeStampedModel):
    """
    A model representing a todo item.
    """
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    reminder = models.DateTimeField(null=True, blank=True)
    repeat_every = models.IntegerField(default=0)
    repeat_until = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.repeat_every > 0:
            self.repeat_until = datetime.datetime.now() + datetime.timedelta(days=365)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
