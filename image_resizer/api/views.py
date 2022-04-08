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


class ImageResizeView(APIView):
    permissions_classes = (AllowAny,)

    def post(self, request):
        image = request.data.get('image')# already opened file in memory
        width = request.query_params.get('width')
        height = request.query_params.get('height')
        img = Image.open(image)
        rgb_image = img.convert('RGB')
        resized_img = rgb_image.resize((int(width), int(height)))
        temp_file = tempfile.NamedTemporaryFile(suffix='.*')
        resized_img.save(temp_file, format='JPEG')
        temp_file.seek(0)
        return HttpResponse(temp_file, content_type='image/*')
