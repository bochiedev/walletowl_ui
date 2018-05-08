import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    console.log('hey')
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    this.http.post('http://127.0.0.1:8000/api-token-auth/', {'username':'bochie','password':'jamee'},{headers : headers})

   // getProducts() {
   //     this.http.post('http://127.0.0.1:8000/api-token-auth/',{'username':'bochie','password':'jamee'},{'Content-Type': 'application/json'}).toPromise().then((res) => {
   //     console.log(res.json());
   //     console.log('hey')
   //     )
   // }, error=>{
   //   console.log(error);
   //   console.log('no hey')
   // });
   //
   // }
  }






}
