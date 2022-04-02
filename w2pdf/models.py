from django.db import models

# Create your models here.
class WordFile(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='word_files/')

    def __str__(self):
        return self.title
