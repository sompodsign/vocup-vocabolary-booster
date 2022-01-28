from django.db import models


# Create your models here.
class Word(models.Model):
    word = models.CharField(max_length=100)
    meaning = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.word
