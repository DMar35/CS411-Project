from django.db import models
 
# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50, unique=True, blank=False, null=False)
    email = models.EmailField(max_length=254, unique=True, blank=False, null=False)
 
class EventTickets(models.Model):
    eventID = models.CharField(max_length=30)
    eventName = models.CharField(max_length=255, blank=False, null=False)
    eventDate = models.DateTimeField(auto_now=False, auto_now_add=False)
    eventVenue = models.CharField(max_length=100, blank=False)
    eventLocation = models.CharField(max_length=100)
    eventSection = models.CharField(max_length=30)
    eventRow = models.CharField(max_length=30)
    ticketPrice = models.CharField(max_length=20, blank=False, null=False)
 
class EventInterests(models.Model):
    interestedUser = models.ForeignKey(User, on_delete=models.CASCADE),
    interestedEvent = models.ForeignKey(EventTickets, on_delete=models.CASCADE)

class TicketData(models.Model):
    ticketDetails = models.JSONField()