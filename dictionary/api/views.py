

from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .serializers import DictSerializer
from ..models import DictWord


class DictionaryViewSet(ModelViewSet):
    serializer_class = DictSerializer
    queryset = DictWord.objects.all()
    permission_classes = [AllowAny]

    def list(self, request, *args, **kwargs):
        return Response("LOL, you can't list me")

    def retrieve(self, request, *args, **kwargs):
        word = self.kwargs.get('word', None)
        if word is None:
            raise ValidationError('Word is required')
        try:
            obj = self.queryset.get(en__iexact=word)
            serializer = self.get_serializer(obj, many=False)
            return Response(serializer.data)
        except DictWord.DoesNotExist:
            raise ValidationError('Word does not exist', code="404")
