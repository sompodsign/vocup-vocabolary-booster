from django.urls import path

from counter.api import views

urlpatterns = [
    path('email/', views.GmailReader.as_view(), name='gmail-reader'),
]
