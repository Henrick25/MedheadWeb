import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from './models/hospital'; // Assurez-vous de définir l'interface Hospital selon la réponse de l'API

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  private apiUrl = '/api/hospitals';

  constructor(private http: HttpClient) {}

  getNearestHospital(
    specialty: string,
    latitude: number,
    longitude: number
  ): Observable<Hospital> {
    let params = new HttpParams()
      .set('specialty', specialty)
      .set('latitude', latitude.toString())
      .set('longitude', longitude.toString());

    return this.http.get<Hospital>(this.apiUrl, { params });
  }
}
