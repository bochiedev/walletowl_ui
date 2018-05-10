import { Injectable } from '@angular/core';
import { AppConstant } from '../../constants/app-constant';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  private serverPath: string = AppConstant.serverPath;

  constructor(
    private http: Http
  ) { }

  getLoginToken(credentials) {
    let url = this.serverPath + "/login/";
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, JSON.stringify(credentials), { headers: headers });
  }

  logOut() {

    localStorage.removeItem('token');


  }
}
