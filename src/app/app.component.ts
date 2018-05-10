import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    AOS.init();
  

  }




}
