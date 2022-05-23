from django.contrib.auth import get_user_model
from django.db import models


# Create your models here.
class TimeAndDateModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class DescriptionField(models.Model):
    description = models.CharField(max_length=255)

    class Meta:
        abstract = True


class Expense(TimeAndDateModel, DescriptionField):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.description} - ৳{self.amount} - {self.date}'


class Income(TimeAndDateModel, DescriptionField):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.description} - ৳{self.amount} - {self.date}'


class CheatMeal(TimeAndDateModel, DescriptionField):
    date = models.DateField()
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.description} - {self.date}'

