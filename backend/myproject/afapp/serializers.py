from rest_framework import serializers
from .models import Service, District, LocalArea, Lead


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = '__all__'

class LocalAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalArea
        fields = '__all__'

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
