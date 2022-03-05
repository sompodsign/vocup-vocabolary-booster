import time

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from ..models import Word


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ["id", "word", "meaning"]
        extra_kwargs = {
            'word': {
                'validators': [
                    UniqueValidator(
                        queryset=Word.objects.all(),
                        message="Word already exists"
                    )
                ]
            }
        }
