import email
import imaplib

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

from counter.api.serializers import CounterSerializer
from counter.models import Counter


class CounterViewSet(ModelViewSet):
    queryset = Counter.objects.all()
    serializer_class = CounterSerializer
    lookup_field = 'name'

    def retrieve(self, request, *args, **kwargs):
        api_key = request.query_params.get('api-key')
        if api_key == "shampad":
            try:
                obj = self.get_object()
                obj.count = obj.count + 1
                obj.save()
                return Response({'count': obj.count})
            except Exception as e:
                print(e)
                obj = Counter.objects.create(name=self.kwargs['name'], count=1)
                return Response({'count': obj.count})
        return Response({'success': False, 'message': 'Invalid api key'}, status=status.HTTP_404_NOT_FOUND)


class GmailReader(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # api_key = request.query_params.get('api-key')
        # if api_key != "shampad":
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login("ss.unidev@gmail.com", "ahaobqwwwoyotshm")

        try:
            mail.select("inbox")
            result, data = mail.search(None, "ALL")
            ids = data[0]
            id_list = ids.split()
            latest_email_id = id_list[-1]
            result, data = mail.fetch(latest_email_id, "(RFC822)")
            raw_email = data[0][1]
            raw_email_string = raw_email.decode('utf-8')
            email_message = email.message_from_string(raw_email_string)
            for part in email_message.walk():
                if part.get_content_type() == "text/plain":
                    body = part.get_payload(decode=True)
                    print(body)
        except Exception as ex:
            print(ex)
        # return Response({'success': False, 'message': 'Invalid api key'}, status=status.HTTP_404_NOT_FOUND)

