from django.db import models
from django.core.validators import RegexValidator

class Service(models.Model):
    service_id = models.CharField(max_length=20, primary_key=True)
    service_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.service_name

from django.db import models

class District(models.Model):
    district_id = models.CharField(max_length=20, primary_key=True)
    district_name = models.CharField(max_length=100, unique=True)
    state = models.CharField(max_length=100)

    def __str__(self):
        return self.district_name  # Only return the district name

from django.db import models

class LocalArea(models.Model):
    local_area_id = models.CharField(max_length=20, primary_key=True)
    local_area_name = models.CharField(max_length=100)
    district = models.ForeignKey('District', on_delete=models.PROTECT)

    def __str__(self):
        return self.local_area_name  # Only return the local area name

class Lead(models.Model):
    # Validator for the phone number field
    phone_regex = RegexValidator(regex=r'^\d{10}$', message="Phone number must be entered in the format: '9999999999'. Exactly 10 digits allowed.")

    name = models.CharField(max_length=100)
    phone_number = models.CharField(validators=[phone_regex], max_length=10, blank=False)
    district = models.ForeignKey('District', on_delete=models.PROTECT)
    local_area = models.ForeignKey('LocalArea', on_delete=models.PROTECT)
    service = models.ForeignKey('Service', on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.name} - {self.phone_number} - {self.service.service_name}"