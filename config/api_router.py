from django.conf import settings
from django.urls import path, include
from rest_framework.routers import DefaultRouter, SimpleRouter

from vocup.users.api.views import UserViewSet, UserListViewSet, CreateUserView
from words.api.views import WordViewSet
from quiz.api.views import QuizViewSet
from dictionary.api.views import DictionaryViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()
#
router.register(r"create-user", CreateUserView)
router.register(r"users", UserViewSet)
router.register(r"all-users", UserListViewSet)
router.register(r"words", WordViewSet)
router.register(r"vocabulary-quiz", QuizViewSet)
router.register(r"dictionary", DictionaryViewSet)

app_name = "api"

urlpatterns = (
    path("dictionary/<str:word>/", DictionaryViewSet.as_view({"get": "retrieve"}), name="dictionary-word"),
    path("vocabulary-quiz/quiz-amount/<int:quiz_amount>/", QuizViewSet.as_view({"get": "get_queryset"}), name="quiz-list"),
    path("vocabulary-quiz/answer", QuizViewSet.as_view({"get": "retrieve"}), name="quiz-answer"),
    path("vocabulary-quiz/remove-all", QuizViewSet.as_view({"delete": "destroy"}), name="quiz-remove-all"),
    path('', include(router.urls)),
)

