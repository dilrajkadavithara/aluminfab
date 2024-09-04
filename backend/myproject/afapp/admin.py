from django.contrib import admin
from .models import Service, District, LocalArea, Lead

# Register your models here.
# Admin class for Service
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('service_id', 'service_name')  # Fields to display in the list view
    search_fields = ('service_name',)  # Fields to search in the admin

# Admin class for District
class DistrictAdmin(admin.ModelAdmin):
    list_display = ('district_id', 'district_name', 'state')
    search_fields = ('district_name', 'state')

# Admin class for LocalArea
class LocalAreaAdmin(admin.ModelAdmin):
    list_display = ('local_area_id', 'local_area_name', 'district')
    search_fields = ('local_area_name',)
    list_filter = ('district',)  # Filter by district

# Admin class for Lead
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'district', 'local_area', 'service')
    search_fields = ('name', 'phone_number')
    list_filter = ('district', 'local_area', 'service')  # Filters to refine the admin view

admin.site.register(Service, ServiceAdmin)
admin.site.register(District, DistrictAdmin)
admin.site.register(LocalArea, LocalAreaAdmin)
admin.site.register(Lead, LeadAdmin)
