from django.contrib import admin
from .models import WordFile
# Register your models here.

class WordFileAdmin(admin.ModelAdmin):
    list_display = ('id', 'file')

admin.site.register(WordFile, WordFileAdmin)
