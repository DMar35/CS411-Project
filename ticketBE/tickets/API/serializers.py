from rest_framework import serializers
from tickets.models import TicketData

class TicketDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketData
        fields = "__all__"