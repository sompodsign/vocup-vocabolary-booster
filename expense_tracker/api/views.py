from datetime import date

from django.db.models import Sum
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

from expense_tracker.api.serializers import ExpenseSerializer, IncomeSerializer, TotalExpenseSerializer
from expense_tracker.models import Expense, Income

#
# class ExpenseViewSet(ModelViewSet):
#     queryset = Expense.objects.all()
#     serializer_class = ExpenseSerializer
#     permission_classes = [IsAuthenticated]
#
#     def get_queryset(self, *args, **kwargs):
#         return self.queryset.filter(user=self.request.user)
#
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)


class IncomeViewSet(ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(user=self.request.user)


class TotalExpenseView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TotalExpenseSerializer

    def get(self, request, *args, **kwargs):
        return Response(self.serializer_class(request.user).data)


class ExpenseViewSet(ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.queryset, many=True)
        current_month_total_expense = self.queryset.filter(date__month=date.today().month).aggregate(Sum('amount'))['amount__sum']
        current_year_total_expense = self.queryset.filter(date__year=date.today().year).aggregate(Sum('amount'))['amount__sum']
        current_day_total_expense = self.queryset.filter(date=date.today()).aggregate(Sum('amount'))['amount__sum']

        return Response({
            'expenses': serializer.data,
            'current_month_total_expense': current_month_total_expense,
            'current_year_total_expense': current_year_total_expense,
            'current_day_total_expense': current_day_total_expense
                    })

