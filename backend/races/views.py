from rest_framework.viewsets import ModelViewSet
from races import serializers
from .models import Race, Participant, Result


class RaceViewSet(ModelViewSet):
    queryset = Race.objects.all().order_by('-start_time')

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.RaceListSerializer
        if self.action == 'retrieve':
            return serializers.RaceSerializer
        return serializers.RaceSerializer


class ParticipantViewSet(ModelViewSet):
    serializer_class = serializers.ParticipantSerializer
    queryset = Participant.objects.all()


class ResultViewSet(ModelViewSet):
    serializer_class = serializers.ResultSerializer
    queryset = Result.objects.all()
