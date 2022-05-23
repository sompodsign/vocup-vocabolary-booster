from datetime import datetime

from django.db.models import Sum
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from expense_tracker.models import Expense, CheatMeal, Income


class TotalExpenseSerializer(ModelSerializer):
    total_expense_current_month = serializers.SerializerMethodField()
    total_expense_current_year = serializers.SerializerMethodField()
    total_expense_today = serializers.SerializerMethodField()

    qs = Expense.objects.all()

    def get_total_expense_current_month(self, obj):
        qs = self.qs.filter(date__month=datetime.today().month)
        return qs.aggregate(Sum('amount'))['amount__sum']

    def get_total_expense_current_year(self, obj):
        qs = self.qs.filter(date__year=datetime.today().year)
        return qs.aggregate(Sum('amount'))['amount__sum']

    def get_total_expense_today(self, obj):
        qs = self.qs.filter(date=datetime.today())
        return qs.aggregate(Sum('amount'))['amount__sum']

    class Meta:
        model = Expense
        fields = ('total_expense_current_month', 'total_expense_current_year', 'total_expense_today')


class ExpenseSerializer(ModelSerializer):
    class Meta:
        model = Expense
        fields = ('id', 'description', 'amount', 'date')


class IncomeSerializer(ModelSerializer):
    class Meta:
        model = Income
        fields = ('id', 'description', 'amount', 'date')


class CheatMealSerializer(ModelSerializer):
    class Meta:
        model = CheatMeal
        exclude = ['description', 'date']
