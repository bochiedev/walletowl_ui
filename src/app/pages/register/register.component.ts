import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { RegisterService } from '../../services/register/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register = new Register;
  app_error:any;
  app_error_message:any;

  constructor(
    private router: Router,
    public registerservice: RegisterService,
  ) { }

  ngOnInit() {
  }



    // login function
    dismiss() {
      this.app_error = false
    }

    newUser() {

      console.log(this.register)

      this.registerservice.register(this.register).subscribe(
        res => {

          res = res.json();
          console.log(res)

        },
        error => {
          this.app_error = true
          this.app_error_message = error.email
          console.log(error)
        })

    }

    // end login funstion


}


export class Register {
  first_name:any;
  last_name:any;
  username:any;
  email:any;
  password:any;
}
