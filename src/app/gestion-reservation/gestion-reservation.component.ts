// reservations.component.ts
import { Component, OnInit } from '@angular/core';
import { GestionReservationService } from '../gestion-reservation.service';

@Component({
  selector: 'app-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrl: './gestion-reservation.component.css',
})
export class GestionReservationComponent {
  reservations: any[] = [];

  constructor(private gestionReservationService: GestionReservationService) {}

  ngOnInit(): void {
    this.gestionReservationService.getAllReservations().subscribe((data) => {
      this.reservations = data;
      console.log(data);
    });
  }
}
