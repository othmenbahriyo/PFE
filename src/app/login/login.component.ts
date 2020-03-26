import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {} as any;
  list = {} as any;


  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit(): void {
  }



  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', this.loginUserData.email);
        this.router.navigate(['/map']);
      },
      err => console.log(err)
    );
    this.auth.loginAdmin(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', 'admin');
        this.router.navigate(['/map']);
      },
      err => console.log(err)
    );

  }

}
