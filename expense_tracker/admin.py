from django.contrib import admin
from .models import Expense, Income, CheatMeal


# Register your models here

@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'amount', 'date', 'description')
    list_display_links = ('id', 'user')
    list_filter = ('user', 'date')
    search_fields = ('user', 'date')
    list_per_page = 31


@admin.register(Income)
class IncomeAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'amount', 'date', 'description')
    list_display_links = ('id', 'user')
    list_filter = ('user', 'date')
    search_fields = ('user', 'date')
    list_per_page = 31


@admin.register(CheatMeal)
class CheatMealAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'date', 'description')
    list_display_links = ('id', 'user')
    list_filter = ('user', 'date')
    search_fields = ('user', 'date')
    list_per_page = 31

