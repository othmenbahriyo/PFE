import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {} as any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        if (this.loginUserData.email === 'admin' && this.loginUserData.password === 'admin' ) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/map']);
        }
      },
      err => console.log(err)
    );
  }

}
