

from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .serializers import WordSerializer
from ..models import Word


class WordViewSet(ModelViewSet):
    serializer_class = WordSerializer
    queryset = Word.objects.all()
    permission_classes = [IsAuthenticated]
    paginate_by = 100

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(user=self.request.user)
