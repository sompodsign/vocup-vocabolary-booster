import random

from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError
from rest_framework.viewsets import ModelViewSet

from words.models import Word
from .serializers import QuizSerializer
from ..models import Quiz

user = get_user_model()


class QuizViewSet(ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()

    def get_queryset(self):
        """
        Returns a list of quiz objects. If the user is authenticated. If there are no quiz objects and there are more
        than five
        words for the user, then a quiz object is created.
        :return: list of quiz objects
        """
        quiz_set = Quiz.objects.all()
        words = Word.objects.all()
        if len(quiz_set) == 0 and len(words) > 5:
            for i in range(len(words)):
                new_quiz = Quiz.objects.create(word=words[i], question=words[i].word, user=user.objects.get(id=1),
                                               correct_answer=words[i].meaning)
                new_quiz.op1 = words[random.choice([x for x in range(len(words)) if x != i])].meaning
                new_quiz.op2 = words[random.choice([x for x in range(len(words)) if x != i])].meaning
                new_quiz.op3 = words[random.choice([x for x in range(len(words)) if x != i])].meaning
                new_quiz.save()
        if self.request.user.is_authenticated:
            return Quiz.objects.filter(user=self.request.user)
        else:
            raise ValidationError("You must be logged in to get results", code="401")
