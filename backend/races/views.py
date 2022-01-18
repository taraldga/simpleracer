from rest_framework.viewsets import ModelViewSet
from .serializers import RaceSerializer, ParticipantSerializer, ResultSerializer
from .models import Race, Participant, Result


class RaceViewSet(ModelViewSet):
    serializer_class = RaceSerializer
    queryset = Race.objects.all().order_by('-start_time')


class ParticipantViewSet(ModelViewSet):
    serializer_class = ParticipantSerializer
    queryset = Participant.objects.all()


class ResultViewSet(ModelViewSet):
    serializer_class = ResultSerializer
    queryset = Result.objects.all()
