from django.urls import path
from . import views

urlpatterns = [
    path("total-expense/", views.TotalExpenseView.as_view(), name="total-expense"),
    path("expense/create-expense", views.CreateExpenseView.as_view(), name="create-expense"),
]

