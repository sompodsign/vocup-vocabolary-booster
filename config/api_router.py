from django.conf import settings
from django.urls import path, include
from rest_framework.routers import DefaultRouter, SimpleRouter

from vocup.users.api.views import UserViewSet, UserListViewSet, CreateUserView
from words.api.views import WordViewSet
from quiz.api.views import QuizViewSet
from dictionary.api.views import DictionaryViewSet
from tutorial.api.views import TutorialViewSet, AllTagsViewSet
from todo.api.views import TodoViewSet
from w2pdf.api.views import WordFileViewSet
from image_resizer.api.views import ImageResizeView
from image_compress.api.views import ImageCompressView
from expense_tracker.api.views import ExpenseViewSet,\
    IncomeViewSet, CheatMealViewSet
from counter.api.views import CounterViewSet


if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register(r"create-user", CreateUserView)
router.register(r"users", UserViewSet)
router.register(r"all-users", UserListViewSet)
router.register(r"words", WordViewSet)
router.register(r"vocabulary-quiz", QuizViewSet)
router.register(r"dictionary", DictionaryViewSet)
router.register(r"tutorials", TutorialViewSet)
router.register(r"todo", TodoViewSet)
router.register(r"word-files", WordFileViewSet)
router.register(r"expenses", ExpenseViewSet)
router.register(r"incomes", IncomeViewSet)
router.register(r"cheat-meals", CheatMealViewSet)
router.register(r"counters", CounterViewSet)

app_name = "api"

urlpatterns = (
    path("dictionary/<str:word>/", DictionaryViewSet.as_view({"get": "retrieve"}), name="dictionary-word"),
    path("vocabulary-quiz/quiz-amount/<int:quiz_amount>/", QuizViewSet.as_view({"get": "get_queryset"}),
         name="quiz-list"),
    path("vocabulary-quiz/answer", QuizViewSet.as_view({"get": "retrieve"}), name="quiz-answer"),
    path("vocabulary-quiz/remove-all", QuizViewSet.as_view({"delete": "destroy"}), name="quiz-remove-all"),
    path("tutorials/", TutorialViewSet.as_view({"get": "list", "post": "create"}), name="tutorials-by-tag"),
    path("tutorial-tags/", AllTagsViewSet.as_view({"get": "list"}), name="tutorial-all-tags"),
    path('', include(router.urls)),
    path("image-resize/", ImageResizeView.as_view(), name="image-resize"),
    path("image-compress/", ImageCompressView.as_view(), name="image-compress"),
)
