import email
import imaplib
from bs4 import BeautifulSoup
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

from counter.api.serializers import CounterSerializer
from counter.models import Counter


class CounterViewSet(ModelViewSet):
    """
    Create or update a counter based on name
    * receives a name and a count through query param
    * if name exists, update the count
    * if name does not exist, create a new counter
    """
    queryset = Counter.objects.all()
    serializer_class = CounterSerializer
    lookup_field = 'name'

    def retrieve(self, request, *args, **kwargs):
        """
        Retrieve a counter based on name
        * if name exists, return the count
        * if name does not exist create a new counter
        * if name exists but count is 0, return 0
        """
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
    """
    View to read emails from gmail account
    * takes email and password in query params
    * returns last 5 emails
    """
    permission_classes = [AllowAny]

    def get(self, request):
        api_key = request.query_params.get('api-key')
        gmail_email = request.query_params.get('mail')
        gmail_password = request.query_params.get('password')
        if api_key == "shampad":
            try:
                mail = imaplib.IMAP4_SSL('imap.gmail.com')
                mail.login(gmail_email, gmail_password)
                mail.select("inbox")
                result, data = mail.search(None, "ALL")
                ids = data[0]
                id_list = ids.split()
                latest_email_id = id_list[-1]
                result, data = mail.fetch(latest_email_id, "(RFC822)")
                raw_email = data[0][1]
                raw_email_string = raw_email.decode('utf-8')
                email_message = email.message_from_string(raw_email_string)

                plain_text_body = ''
                if email_message.is_multipart():
                    for part in email_message.walk():
                        if part.get_content_type() == "text/plain":
                            plain_text_body = part.get_payload(decode=True)
                            break

                if plain_text_body == '':
                    plain_text_body = BeautifulSoup(email_message.as_string(), features="html.parser").get_text()

                mail.close()
                mail.logout()
                return Response({'success': True, 'body': plain_text_body})
            except Exception as ex:
                print(ex)
        else:
            return Response({'success': False, 'message': 'Invalid api key'}, status=status.HTTP_404_NOT_FOUND)

