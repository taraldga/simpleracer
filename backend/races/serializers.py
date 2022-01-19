from rest_framework import serializers
from .models import Race, Participant, Result
from django_typomatic import ts_interface, generate_ts

@ts_interface()
class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ['id', 'name', 'race', 'email', 'start_nr']
        read_only_fields = ['start_nr']


@ts_interface()
class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = "__all__"


@ts_interface()
class RaceSerializer(serializers.ModelSerializer):
    # participants = ParticipantSerializer(source='participant_set')

    class Meta:
        model = Race
        fields = ['id', 'name', 'description', 'start_time', 'participant_set']
        depth = 1


@ts_interface()
class RaceListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Race
        fields = ['id', 'name', 'description', 'start_time']
        depth = 1


generate_ts('../frontend/models/Race.ts')
