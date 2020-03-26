import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ReservationService } from '../shared/reservation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  reserv = {} as any;
  list = {} as any ;
  user = localStorage.getItem('name');


  constructor(private auth: ReservationService, private router: Router, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.auth.getListReservation()
    .subscribe(res => this.list = res);
    return this.list ;
  }



  getUrl() {
  // tslint:disable-next-line:max-line-length
  return 'url(\'https://www.primeparkingbook.com/wp-content/uploads/2019/12/ac1975e4-f8ee-4b5c-b76d-321325562de3.jpg\')';
}



  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
  });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}


