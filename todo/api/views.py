import time

from django.utils.text import slugify
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .serializers import TodoSerializer
from ..models import Todo


class TodoViewSet(ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    # def get_serializer_class(self):
    #     serializer_class = self.serializer_class
    #     if self.action == 'create':
    #         return PostCreateSerializer
    #     return serializer_class
    #
    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    #
    # def perform_create(self, serializer):
    #     str_time = "".join(str(time.time()).split("."))
    #     string = "%s-%s" % (self.request.data['title'], str_time[7:])
    #     serializer.save(author=self.request.user, slug=slugify(string))
    #
    # def get_permissions(self):
    #     if self.action == 'list' or self.action == 'retrieve':
    #         return [AllowAny()]
    #     return super(TutorialViewSet, self).get_permissions()
    #

