from django.contrib import admin


# Register your models here.
from dictionary.models import DictWord


@admin.register(DictWord)
class DictAdmin(admin.ModelAdmin):
    list_display = ('en', 'bn')
    search_fields = ('en', 'bn')
    list_per_page = 50
    ordering = ('en',)
