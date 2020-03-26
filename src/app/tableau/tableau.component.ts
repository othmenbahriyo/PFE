import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../shared/reservation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  list = {} as any;


  constructor(private auth: ReservationService, private router: Router) { }


  ngOnInit(): void {
    this.auth.getListReservation()
    .subscribe(res => this.list = res);
  }



// tslint:disable-next-line:align
// tslint:disable-next-line:variable-name
onDelete(_id: string) {
  if (confirm('Are you sure to delete this record ?') === true) {
    this.auth.deletelistReservation(_id).subscribe((res) => {
      this.ngOnInit();
    });
  }
}

}

