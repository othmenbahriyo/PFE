import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reserv =  {} as any;
  constructor(private auth: AuthService, private router: Router) { }

  private state$: Observable<object>;
  ngOnInit(): void {
  }
  registerRes() {
    this.auth.saveReservation(this.reserv)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/map']);
      },
      err => console.log(err)
    );

  }

  }


