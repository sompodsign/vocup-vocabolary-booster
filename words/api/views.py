
from rest_framework.viewsets import ModelViewSet
from .serializers import WordSerializer
from ..models import Word


class WordViewSet(ModelViewSet):
    serializer_class = WordSerializer
    queryset = Word.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
