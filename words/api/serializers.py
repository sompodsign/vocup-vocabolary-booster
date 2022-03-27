import time

from rest_framework import serializers


from ..models import Word


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ["id", "word", "meaning"]

    def create(self, validated_data):
        request = self.context.get("request")
        words = (instance.word.lower() for instance in Word.objects.filter(user=request.user))
        word = validated_data["word"]
        if word.lower() in words:
            raise serializers.ValidationError(
                {"error": "Word already exists"}
            )
        else:
            return Word.objects.create(
                user=request.user,
                word=word,
                meaning=validated_data["meaning"]
            )

