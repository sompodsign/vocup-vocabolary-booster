from django.contrib.auth import get_user_model
from rest_framework import serializers

from ..models import Quiz

user = get_user_model()


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ["id", "word", "question", "user", "created_at", "updated_at", "is_active", "op1", "op2", "op3",
                  "correct_answer"]
