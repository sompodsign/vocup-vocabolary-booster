
from rest_framework import serializers
from ..models import DictWord


class DictSerializer(serializers.ModelSerializer):
    class Meta:
        model = DictWord
        fields = ["id", "en", "bn", "pron", "en_syn", "bn_syn", "sentence"]
