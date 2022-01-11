import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = "http://localhost:8084/reservation";
  

  constructor(private httpClient: HttpClient) { }

  getReservationList(): Observable<any> {
    return this.httpClient.get(this.baseURL + '/ShowAllReservations');
  }

  addReservationList(reservation: Reservation) {
    console.log(reservation+"see me");
    return this.httpClient.post<any>(this.baseURL + '/addReservation', reservation);
  }

  updateReservationList(reservation: Reservation):Observable<any> {
    console.log(reservation);
    return this.httpClient.put(this.baseURL + '/updateReservation', reservation);
  }

  deleteReservationList() {
    return this.httpClient.delete<any>(this.baseURL + '/cancleReservation');
  }
}
// `${this.baseURL}`
