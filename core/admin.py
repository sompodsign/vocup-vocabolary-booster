from django.contrib import admin


class UUIDModelAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'created_at', 'updated_at')


def register(model_or_iterable, admin_class=UUIDModelAdmin, **options):
    admin.site.register(model_or_iterable, admin_class, **options)
