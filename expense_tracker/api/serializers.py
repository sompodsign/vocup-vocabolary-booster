from rest_framework.serializers import ModelSerializer

from expense_tracker.models import Expense


class ExpenseSerializer(ModelSerializer):
    class Meta:
        model = Expense
        exclude = ['user', 'updated_at']


class IncomeSerializer(ModelSerializer):
    class Meta:
        model = Expense
        exclude = ['user', 'updated_at']

