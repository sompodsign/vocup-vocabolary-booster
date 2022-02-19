from django.db import models
from django.contrib.postgres.fields import ArrayField


# Create your models here.
class DictWord(models.Model):
    en = models.CharField(max_length=100)
    bn = models.CharField(max_length=300)
    pron = ArrayField(models.CharField(max_length=100, blank=True), size=2)
    en_syn = ArrayField(
        models.CharField(max_length=100, blank=True),
    )
    bn_syn = ArrayField(
        models.CharField(max_length=100, blank=True),
    )
    sentence = ArrayField(
        models.CharField(max_length=300, blank=True),
    )

    def __str__(self):
        return self.en
# /var/lib/docker/volumes/vocup_production_postgres_data_backups/_data
