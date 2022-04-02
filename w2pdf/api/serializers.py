import time

from rest_framework import serializers


from ..models import WordFile


class WordFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordFile
        fields = "__all__"
