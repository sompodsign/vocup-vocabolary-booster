
from rest_framework.viewsets import ModelViewSet
from .serializers import DictSerializer
from ..models import DictWord


class DictionaryViewSet(ModelViewSet):
    serializer_class = DictSerializer
    queryset = DictWord.objects.all()
