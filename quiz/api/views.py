import json
import random
import time

from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from words.models import Word
from .serializers import QuizSerializer
from ..models import Quiz

from ..utils.custom_suffle import custom_shuffle

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

                output = [
                    {"id": quiz.id, "question": quiz.question,
                     "answers": custom_shuffle([quiz.op1, quiz.op2, quiz.op3, quiz.correct_answer]),
                     "correctAnswer": quiz.correct_answer} for quiz in
                    new_set]

                time.sleep(0.5) # Sleep for 3 seconds to prevent spamming the server
                return Response(output)

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
        query_parameter = json.loads(request.query_params.get('answer')) if request.query_params.get('answer') else None
        quiz_id = query_parameter.get('id')
        quiz_answer = query_parameter.get('answer')
        if self.request.user.is_authenticated:
            quiz = Quiz.objects.get(id=quiz_id)
            if quiz.user == self.request.user:
                if quiz.correct_answer == quiz_answer:
                    return Response({'correct': True})
                else:
                    return Response({'correct': False})
            else:
                raise ValidationError("You are not allowed to view this quiz", code="401")

    def destroy(self, request, *args, **kwargs):

        if self.request.user.is_authenticated:
            Quiz.objects.all().delete()
            time.sleep(3)
            return Response({'deleted': True})
        else:
            time.sleep(3)
            raise ValidationError("You must be logged in to delete quiz objects", code="401")
