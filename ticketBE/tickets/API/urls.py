from django.urls import path
from tickets.API.views import  TicketView

urlpatterns = [

    path('tickets',TicketView.as_view()),
    #path('news/<int:pk>',NewsDetailPage.as_view())
]