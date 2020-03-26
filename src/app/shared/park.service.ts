import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {parking} from 'server/models/parking.js';
@Injectable({
  providedIn: 'root'
})
export class ParkService {
  park: parking ;
  parks: parking[];
  private saveParkingUrl = 'http://localhost:3000/api/addParking';
  private deleteparkUrl = 'http://localhost:3000/api/list/p';
  private updateparkUrl = 'http://localhost:3000/api/list/m';
  private getlistParkUrl = 'http://localhost:3000/api/list/parking';




  constructor(private http: HttpClient, private router: Router) { }



  // tslint:disable-next-line:variable-name
  deletePark(_id: string) {
    return this.http.delete(this.deleteparkUrl + `/${_id}`);
  }
  getListPark() {
    return this.http.get<any>(this.getlistParkUrl);
  }
  updatepark(emp) {
    return this.http.put(this.updateparkUrl + `/${emp._id}`, emp);
  }
  savePark(user) {
    return this.http.post<any>(this.saveParkingUrl, user);
  }
}
