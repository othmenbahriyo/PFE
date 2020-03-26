import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any ;
  // tslint:disable-next-line:variable-name
  constructor(public auth: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.auth.loginUser(this.user);
    this.auth.loggedIn();
  }
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('__paypal_storage__');
    localStorage.removeItem('role');
    this.router.navigate(['/map']);

  }
  c() {
    if ( localStorage.getItem(name) === 'admin' ) {
      return true;
    }
  }
}
