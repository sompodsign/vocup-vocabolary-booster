
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .serializers import WordSerializer
from ..models import Word


class WordViewSet(ModelViewSet):
    serializer_class = WordSerializer
    queryset = Word.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        word_prefix = request.GET.get('word_prefix', None)
        if word_prefix:
            self.queryset = self.queryset.filter(word__icontains=word_prefix)
        return super().list(request, *args, **kwargs)
