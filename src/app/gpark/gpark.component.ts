import { Component, OnInit, Inject, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ParkService } from '../shared/park.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {parking} from 'server/models/parking.js';


@Component({
  selector: 'app-gpark',
  templateUrl: './gpark.component.html',
  styleUrls: ['./gpark.component.css']
})
export class GparkComponent implements OnInit {
  markers = {} as any;
  marker = {} as any ;
  list = {} as any;
  parking = {} as any;
  M: any;
  isDraggable: boolean;
  selected = '';
  cmp = 0;


  constructor(private auth: ParkService, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.auth.park;
    if (localStorage.length === 0) {
 window.location.replace('login');    }
    this.resetForm();
    this.refreshEmployeeList();
  }



  refreshEmployeeList() {
    this.auth.getListPark().subscribe((res) => {
      this.marker = res ,
      this.cmp = this.marker.length ;
    });
  }



  // tslint:disable-next-line:variable-name
  onDeletee(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.auth.deletePark(_id).subscribe((res) => {
        this.refreshEmployeeList();
      });
    }
  }




saveParking() {
  this.auth.savePark(this.markers).subscribe(
    res => {
      this.resetForm();
      this.refreshEmployeeList();
    },
    err => console.log(err)
  );


}


resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    this.auth.park = {
    _id: '',
    name: '',
    longitude: '',
    latitude: '',
    price: null
  };
}
}



onEdit(emp: parking) {
  this.markers = emp;
}




onSubmit(form: NgForm) {
    this.auth.updatepark(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshEmployeeList();
    });

}


selectChangeHandler($event) {}

}


