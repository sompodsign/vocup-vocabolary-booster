from django.db import models
from words.models import TimeStampedModel

from django.contrib.auth.models import User
from words.models import Word


# Create your models here.
class Quiz(TimeStampedModel):
    word = models.OneToOneField(Word, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    op1 = models.CharField(max_length=100)
    op2 = models.CharField(max_length=100)
    op3 = models.CharField(max_length=100)
    correct_answer = models.CharField(max_length=100)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.word

