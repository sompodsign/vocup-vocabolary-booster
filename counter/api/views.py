from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from counter.api.serializers import CounterSerializer
from counter.models import Counter


class CounterViewSet(ModelViewSet):
    queryset = Counter.objects.all()
    serializer_class = CounterSerializer
    lookup_field = 'name'

    # create new counter with new value
    def create(self, request, *args, **kwargs):
        serializer = CounterSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # retrieve counter
    def list(self, request, *args, **kwargs):
        # get data from query param
        name = request.query_params.get('counter-name')
        api_key = request.query_params.get('api-key')

        if api_key == "shampad":
            if name is None:
                return Response({'success': False, 'message': 'Enter counter name as query param'}, status=status.HTTP_404_NOT_FOUND)
            else:
                try:
                    obj = Counter.objects.get(name=name)
                    obj.count = obj.count + 1
                    obj.save()
                    return Response({'count': obj.count})
                except Counter.DoesNotExist:
                    counter = Counter.objects.create(name=name, count=0)
                    return Response({'count': counter.count})
        else:
            return Response({'success': False, 'message': 'Invalid api key'}, status=status.HTTP_404_NOT_FOUND)



