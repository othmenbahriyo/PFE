import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservationUrl = 'http://localhost:3000/api/saveres';
  private deleteListReservationUrl = 'http://localhost:3000/api/list/d';
  private getListReservationUrl = 'http://localhost:3000/api/list/res';





  constructor(private http: HttpClient, private router: Router) { }

  getListReservation() {
    return this.http.get<any>(this.getListReservationUrl);
  }

  // tslint:disable-next-line:variable-name
  deletelistReservation(_id: string) {
    return this.http.delete(this.deleteListReservationUrl + `/${_id}`);
  }
  saveReservation(user) {
    return this.http.post<any>(this.reservationUrl, user);
  }
}
