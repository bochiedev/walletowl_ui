import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: Http,
  ) { }


  title = 'app';
  selectedValue: string = "";
  items = [
    { value: "0", view: "zero" },
    { value: "1", view: "one" },
    { value: "2", view: "Two" }
  ];
  ngOnInit() {
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    this.http.post('http://127.0.0.1:8000/login/', {'username':'jamohsize','password':'james'},{headers : headers}).toPromise().then((res) => {
      console.log(res)

  },error=>{
    console.log(error)
  })

  this.http.get('http://127.0.0.1:8000/account/register/', {headers : headers}).toPromise().then((res) => {
    console.log(res.json())

  },error=>{
  console.log(error)
  })

}




}
