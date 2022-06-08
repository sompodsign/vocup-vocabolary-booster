from counter.models import Counter
from rest_framework import serializers


class CounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counter
        fields = '__all__'

