import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      mail: ['', [Validators.required, Validators.email]],
      hospitalId: ['', Validators.required],
      specialty: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      status: ['pending', Validators.required],
      reason: [''], // Optionnel
    });
  }

  submitReservation(): void {
    if (this.reservationForm.valid) {
      const patientDetails = {
        name: this.reservationForm.value.name,
        tel: this.reservationForm.value.tel,
        mail: this.reservationForm.value.mail,
      };

      const reservationDetails = {
        hospitalId: this.reservationForm.value.hospitalId,
        specialty: this.reservationForm.value.specialty,
        appointmentDate: this.reservationForm.value.appointmentDate,
        status: this.reservationForm.value.status,
        reason: this.reservationForm.value.reason,
        patientId: this.reservationForm.value.hospitalId,
      };

      this.reservationService
        .submitReservation(patientDetails, reservationDetails)
        .subscribe({
          next: (response) => {
            console.log('Réservation réussie:', response);
            // Gérer la réussite (par exemple, afficher un message de succès)
          },
          error: (error) => {
            console.error('Erreur lors de la réservation:', error);
            // Gérer l'erreur (par exemple, afficher un message d'erreur)
          },
        });
    }
  }
}
