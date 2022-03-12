from django.contrib import admin
from .models import Todo


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'user', 'created', 'updated')
    list_filter = ('completed', 'created', 'user')
    search_fields = ('title',)
    ordering = ('-created',)
