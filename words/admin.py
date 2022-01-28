from django.contrib import admin

from .models import Word


class WordAdmin(admin.ModelAdmin):
    list_display = ('word', 'meaning')
    list_filter = ('word',)
    search_fields = ('word',)


admin.site.register(Word, WordAdmin)
