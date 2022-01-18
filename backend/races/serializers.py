from rest_framework import serializers
from .models import Race


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ['id', 'name', 'description', 'start_time']
