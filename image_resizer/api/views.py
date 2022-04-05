from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from PIL import Image


class ImageResizeView(APIView):

    def post(self, request):
        image = request.data['image'] # already opened file in memory
        width = request.query_params.get('width')
        height = request.query_params.get('height')
        img = Image.open(image)
        rgb_image = img.convert('RGB')
        resized_img = rgb_image.resize((int(width), int(height)))
        resized_img.save('temp/resized_image.jpg')
        with open('temp/resized_image.jpg', 'rb') as f:
            return HttpResponse(f.read(), content_type='image/jpg')

