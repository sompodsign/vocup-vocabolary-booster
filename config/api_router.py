from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from vocup.users.api.views import UserViewSet, UserListViewSet, CreateUserView
from words.api.views import WordViewSet
from quiz.api.views import QuizViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()
#
router.register("create-user", CreateUserView)
router.register("users", UserViewSet)
router.register("all-users", UserListViewSet)
router.register("words", WordViewSet)
router.register("vocubulary-quiz", QuizViewSet)


app_name = "api"
urlpatterns = router.urls
