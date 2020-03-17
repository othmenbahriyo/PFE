import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
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
  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.auth.getListReservation()
    .subscribe(res => this.list = res);
    return this.list ;
  }
  getUrl() {
  // tslint:disable-next-line:max-line-length
  return 'url(\'https://www.primeparkingbook.com/wp-content/uploads/2019/12/ac1975e4-f8ee-4b5c-b76d-321325562de3.jpg\')';
}

findData() {
  for (let i = 0 ; i < 1000 ; i++) {
// tslint:disable-next-line:only-arrow-functions

  }

}

openDialog(): void {
  const dialogRef = this.dialog.open(MyDialogComponent, {
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}


