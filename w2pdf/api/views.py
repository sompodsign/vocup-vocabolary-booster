
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from w2pdf.api.serializers import WordFileSerializer
from w2pdf.models import WordFile


class WordFileViewSet(ModelViewSet):
    serializer_class = WordFileSerializer
    queryset = WordFile.objects.all()
    permission_classes = [AllowAny]
