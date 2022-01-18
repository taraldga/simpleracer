from rest_framework import serializers
from .models import Race, Participant, Result


class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ['id', 'name', 'race', 'email', 'start_nr']
        read_only_fields = ['start_nr']


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = "__all__"


class RaceSerializer(serializers.ModelSerializer):
    # participants = ParticipantSerializer(source='participant_set')

    class Meta:
        model = Race
        fields = ['id', 'name', 'description', 'start_time', 'participant_set']
        depth = 1


class RaceListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Race
        fields = ['id', 'name', 'description', 'start_time']
        depth = 1