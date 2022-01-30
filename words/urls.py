from django.urls import path

from .views import WordsView

urlpatterns = [
    path('', WordsView.as_view(), name='index'),
    ]
