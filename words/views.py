
from django.views.generic import ListView

from .models import Word


# Create your views here.
class WordsView(ListView):
    model = Word
    template_name = 'index.html'
