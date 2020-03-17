import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { listRes } from 'server/models/listRes';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';
  private reservationUrl = 'http://localhost:3000/api/saveres';
  private saveParkingUrl = 'http://localhost:3000/api/addParking';
  private getListReservationUrl = 'http://localhost:3000/api/list/res';
  private deleteListReservationUrl = 'http://localhost:3000/api/list/d';
  private deleteparkUrl = 'http://localhost:3000/api/list/p';
    private getlistParkUrl = 'http://localhost:3000/api/list/parking';



  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }
  saveReservation(user) {
    return this.http.post<any>(this.reservationUrl, user);
  }

  savePark(user) {
    return this.http.post<any>(this.saveParkingUrl, user);
  }

  getListReservation() {
    return this.http.get<any>(this.getListReservationUrl);
  }
  // tslint:disable-next-line:variable-name
  deletelistReservation(_id: string) {
    return this.http.delete(this.deleteListReservationUrl + `/${_id}`);
  }
  // tslint:disable-next-line:variable-name
  deletePark(_id: string) {
    return this.http.delete(this.deleteparkUrl + `/${_id}`);
  }
  getListPark() {
    return this.http.get<any>(this.getlistParkUrl);
  }
}
