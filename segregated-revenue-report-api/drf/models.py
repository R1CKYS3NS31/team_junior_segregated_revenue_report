from django.db import models

payment_choices = (
    ("MPESA","MPESA"),
    ("NHIF","NHIF"),
    ("CASH","CASH"),
    ("BANK","BANK")

)

class Revenue(models.Model):
    patient_name = models.CharField(max_length=50)
    payment_method = models.CharField(choices=payment_choices, max_length=50, blank=True, null=True)
    registration = models.FloatField(default=0.00,blank=True, null=True)
    laboratory = models.FloatField(default=0.00,blank=True, null=True)
    radiology = models.FloatField(default=0.00,blank=True, null=True)
    pharmacy = models.FloatField(default=0.00,blank=True, null=True)
    procedure = models.FloatField(default=0.00,blank=True, null=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.patient_name}'s Payment Information"