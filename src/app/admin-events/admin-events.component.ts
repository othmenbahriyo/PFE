import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {
  registerUserData =  {} as any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.auth.registerAdmin(this.registerUserData)
    .subscribe(
      res => {
        this.router.navigate(['/gpark']);
      },
      err => console.log(err)
    );

  }

}
