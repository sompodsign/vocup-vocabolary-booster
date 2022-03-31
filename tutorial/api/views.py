import time

from django.utils.text import slugify
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .serializers import PostSerializer, PostCreateSerializer, PostDetailSerializer
from ..models import Post


class TutorialViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = 'slug'

    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.action == 'create':
            return PostCreateSerializer
        return serializer_class

    def list(self, request, *args, **kwargs):
        tag = request.query_params.get('tag', '')

        if tag != '':
            self.queryset = self.queryset.filter(tags__contains=[tag])
            return super(TutorialViewSet, self).list(request, *args, **kwargs)
        return super(TutorialViewSet, self).list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = PostDetailSerializer(instance, many=False)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        str_time = "".join(str(time.time()).split("."))
        string = "%s-%s" % (self.request.data['title'], str_time[7:])
        serializer.save(author=self.request.user, slug=slugify(string))

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            return [AllowAny()]
        return super(TutorialViewSet, self).get_permissions()


class AllTagsViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = 'tag'

    def list(self, request, *args, **kwargs):
        tags = []
        for post in self.queryset:
            for tag in post.tags:
                if tag not in tags:
                    tags.append(tag)
        return Response(tags)

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            return [AllowAny()]
        return super(AllTagsViewSet, self).get_permissions()
