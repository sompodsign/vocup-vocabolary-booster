
from rest_framework.viewsets import ModelViewSet
from .serializers import PostSerializer
from ..models import Post


class TutorialViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
