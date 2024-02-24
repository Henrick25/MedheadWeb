import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './models/reservation';
import { Patient } from './models/patient';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'https://votre-api.com/api';

  constructor(private http: HttpClient) {}
  submitReservation(
    patientDetails: Patient,
    reservationDetails: Reservation
  ): Observable<any> {
    const payload = {
      patient: patientDetails,
      reservation: reservationDetails,
    };
    return this.http.post(`${this.apiUrl}/reservations`, payload);
  }
}
