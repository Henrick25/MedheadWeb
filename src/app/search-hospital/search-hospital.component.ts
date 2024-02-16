import { Component } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { Hospital } from '../models/hospital';

@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css'],
})
export class SearchHospitalComponent {
  specialty = '';
  latitude!: number;
  longitude!: number;
  hospital?: Hospital;
  notFound = false;

  constructor(private hospitalService: HospitalService) {}

  searchHospital(): void {
    this.hospitalService
      .getNearestHospital(this.specialty, this.latitude, this.longitude)
      .subscribe({
        next: (hospital) => {
          this.hospital = hospital;
          this.notFound = false;
        },
        error: (error) => {
          console.error('Error fetching the hospital:', error);
          this.notFound = true;
        },
      });
  }
}
