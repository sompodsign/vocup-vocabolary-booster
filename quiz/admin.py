from django.contrib import admin

from .models import Quiz


# Register your models here.

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ('word', 'user', 'op1', 'op2', 'op3', 'correct_answer', 'created_at')
