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
  supprimerReservation(index: number, id: number) {
    // Appeler le service pour supprimer la réservation dans le backend
    this.gestionReservationService.supprimerReservation(id).subscribe(() => {
      // Supprimer la réservation de l'interface
      this.reservations.splice(index, 1);
    });
  }

  validerReservation(index: number, reservation: any) {
    // Marquer la réservation comme traitée et préparer les données à envoyer
    reservation.etatDemande = true;
    const reservationTraitee = { ...reservation, etatDemande: true };

    // Appeler le service pour envoyer la réservation traitée au backend
    this.gestionReservationService
      .validerReservation(reservationTraitee.id, reservationTraitee)
      .subscribe(() => {
        // Mise à jour de l'interface si nécessaire
        // Par exemple, enlever le bouton Supprimer ou afficher "Réservation traitée"
        this.reservations[index] = reservationTraitee;
      });
  }
}