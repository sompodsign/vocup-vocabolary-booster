from django.contrib import admin

# Register your models here.
from counter.models import Counter

admin.site.register(Counter)
