from django.urls import path
from . import views

urlpatterns = [
    path("total-expense/", views.TotalExpenseView.as_view(), name="total-expense"),
]

