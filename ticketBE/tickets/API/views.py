from rest_framework.generics import ListAPIView,RetrieveAPIView
from tickets.models import TicketData
from tickets.API.serializers import TicketDataSerializer

class TicketView(ListAPIView):
    queryset=TicketData.objects.all()
    serializer_class=TicketDataSerializer