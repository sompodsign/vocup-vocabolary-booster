import random

from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from words.models import Word
from .serializers import QuizSerializer
from ..models import Quiz

user = get_user_model()


class QuizViewSet(ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()

    def get_queryset(self, *args, **kwargs):
        """
        Returns a list of quiz objects. If the user is authenticated. If there are no quiz objects and there are more
        than five
        words for the user, then a quiz object is created.
        :return: list of quiz objects
        """
        quiz_set = Quiz.objects.all()
        words = Word.objects.all()
        quiz_amount = kwargs.get('quiz_amount')

        if len(quiz_set) == 0 and len(words) > 5:
            for i in range(len(words)):
                new_quiz = Quiz.objects.create(word=words[i], question=words[i].word, user=user.objects.get(id=1),
                                               correct_answer=words[i].meaning)
                new_quiz.op1 = words[random.choice([x for x in range(len(words)) if x != i])].meaning
                new_quiz.op2 = words[random.choice([x for x in range(len(words)) if x != i])].meaning
                new_quiz.op3 = words[random.choice([x for x in range(len(words)) if x != i])].meaning
                new_quiz.save()

        if self.request.user.is_authenticated:
            # If the user is authenticated, then the quiz objects are filtered by the user
            user_quiz_set = Quiz.objects.filter(user=self.request.user)
            if quiz_amount is not None and quiz_amount < len(user_quiz_set):
                # returns randomized queryset of quiz objects
                new_set = user_quiz_set.order_by('?')[:quiz_amount]
                serializer = QuizSerializer(new_set, many=True)
                return Response(serializer.data)
            elif quiz_amount is not None and quiz_amount >= len(user_quiz_set):
                raise ValidationError('Please enter less than or equal to the amount of quiz objects.')
            return Quiz.objects.filter(user=self.request.user)
        else:
            raise ValidationError("You must be logged in to get results", code="401")

    def retrieve(self, request, *args, **kwargs):
        """
        :param request:
        :param args:
        :param kwargs:
        :return: return True or False according to the answer of the quiz
        """
        quiz_id = kwargs.get('pk')
        quiz_answer = request.data.get('answer')
        if self.request.user.is_authenticated:
            quiz = Quiz.objects.get(id=quiz_id)
            if quiz.user == self.request.user:
                if quiz.correct_answer == quiz_answer:
                    return Response(True)
                else:
                    return Response(False)
            else:
                raise ValidationError("You are not allowed to view this quiz", code="401")
