from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.viewsets import ModelViewSet
from .serializers import RaceSerializer
from .models import Race
# Create your views here.


class RaceViewSet(ModelViewSet):
    serializer_class = RaceSerializer
    queryset = Race.objects.all().order_by('-start_time')
