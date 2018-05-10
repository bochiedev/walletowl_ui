import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  app_error: boolean = false

  constructor(
    private router: Router,
    private loginservice: LoginService,
    private http: Http,
  ) { }

  ngOnInit() {

  }


  // login function
  dismiss() {
    this.app_error = false
  }

  newlogin() {

    console.log(this.login)
    this.loginservice.getLoginToken(this.login).subscribe(
      res => {

        res = res.json();
         localStorage.setItem("token", res["token"]);
         this.router.navigate(['/dashboard']);
        console.log(res)

      },
      error => {
        this.app_error = true
        console.log(error)
      })

  }

  // end login funstion

}


export class Login {
  email: any;
  password: any;
}
