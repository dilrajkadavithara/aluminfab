from rest_framework.views import APIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Service, District, LocalArea, Lead
from .serializers import ServiceSerializer, DistrictSerializer, LocalAreaSerializer, LeadSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class DistrictViewSet(viewsets.ModelViewSet):
    queryset = District.objects.all()
    serializer_class = DistrictSerializer

class LocalAreaViewSet(viewsets.ModelViewSet):
    queryset = LocalArea.objects.all()
    serializer_class = LocalAreaSerializer

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    
class LocalAreaListView(APIView):
    def get(self, request, district_id, *args, **kwargs):
        local_areas = LocalArea.objects.filter(district__district_id=district_id)
        serializer = LocalAreaSerializer(local_areas, many=True)
        return Response(serializer.data)
