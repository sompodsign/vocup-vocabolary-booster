from celery import shared_task
from celery.utils.log import get_task_logger
from django.core.mail import send_mail


logger = get_task_logger(__name__)


@shared_task
def login_success_mail():
    logger.info("Sending email to Shampad Sharkar about nothing")
    send_mail(
        subject="Test subject",
        message="Test message",
        from_email="sompodsrkr@gmail.com",
        recipient_list=["sompod123@gmail.com"],
    )
    logger.info("Email sent")
