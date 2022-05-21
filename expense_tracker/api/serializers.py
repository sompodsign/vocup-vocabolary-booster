from django.db.models import Sum
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from expense_tracker.models import Expense

# add total expense field in ExpenseSerializer

class TotalExpenseSerializer(ModelSerializer):
    total_expense = serializers.SerializerMethodField()

    class Meta:
        model = Expense
        fields = ('total_expense',)

    def get_total_expense(self, obj):
        return obj.expense_set.aggregate(Sum('amount'))['amount__sum']


class ExpenseSerializer(ModelSerializer):
    total_expense = serializers.SerializerMethodField()

    def get_total_expense(self, obj):
        qs = Expense.objects.filter(user=obj.user)
        total_expense = qs.aggregate(Sum('amount'))['amount__sum']
        return total_expense

    class Meta:
        model = Expense
        # exclude = ['user', 'updated_at']
        fields = ['total_expense']


class IncomeSerializer(ModelSerializer):
    class Meta:
        model = Expense
        exclude = ['user', 'updated_at']

