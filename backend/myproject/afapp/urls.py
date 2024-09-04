from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, DistrictViewSet, LocalAreaViewSet, LeadViewSet,LocalAreaListView

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'districts', DistrictViewSet)
router.register(r'localareas', LocalAreaViewSet)
router.register(r'leads', LeadViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/local-areas/<str:district_id>/', LocalAreaListView.as_view(), name='local-areas-by-district'),
]
