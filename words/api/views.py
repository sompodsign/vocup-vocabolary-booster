from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .serializers import WordSerializer
from ..models import Word


class WordViewSet(ModelViewSet):
    serializer_class = WordSerializer
    queryset = Word.objects.all()
    permission_classes = [IsAuthenticated, ]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
