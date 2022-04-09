import os
import time

from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from PIL import Image
import tempfile


class ImageCompressView(APIView):
    permissions_classes = (AllowAny,)

    def post(self, request):
        image = request.data.get('image') # already opened file in memory
        quality = request.query_params.get('quality')
        if not image or not quality:
            return Response({'error': 'Image or quality not found'})
        try:
            quality = int(quality)
        except ValueError:
            return Response({'error': 'Quality must be an integer'})
        if quality < 0 or quality > 100:
            return Response({'error': 'Quality must be between 0 and 100'})
        image = Image.open(image)
        rgb_image = image.convert('RGB')
        temp_file = tempfile.NamedTemporaryFile(suffix='.*')
        rgb_image.save(temp_file, quality=quality, optimize=True, format='JPEG')
        temp_file.seek(0)
        return HttpResponse(temp_file, content_type='image/*')
