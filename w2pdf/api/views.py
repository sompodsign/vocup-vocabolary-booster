import subprocess

from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from w2pdf.api.serializers import WordFileSerializer
from w2pdf.models import WordFile



class WordFileViewSet(ModelViewSet):
    serializer_class = WordFileSerializer
    queryset = WordFile.objects.all()
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        tmp_file = request.data.get('file')
        process = subprocess.Popen(['lowriter', '--convert-to', 'pdf', tmp_file.name, '--outdir', 'output_path'])
        process.wait()
        return super().create(request, *args, **kwargs)

