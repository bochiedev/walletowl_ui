import { Injectable } from '@angular/core';
import { AppConstant } from '../../constants/app-constant';
import { Http, Headers } from '@angular/http';

@Injectable()
export class RegisterService {
  private serverPath: string = AppConstant.serverPath;

  constructor(
    private http: Http
  ) { }

  register(details) {
    let url = this.serverPath + "/account/register/";
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, JSON.stringify(details), { headers: headers });
  }
}
