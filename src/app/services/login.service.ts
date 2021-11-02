import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn: boolean = false;

  constructor(private _http: HttpClient) { }

  //Function to validate the user.
  public validateUser(): Observable<any> {
    return this._http.get(environment.loginURL + "users");
  }

  //Getter function of companyId.
  public getIsLoggedIn() {
    return this.isLoggedIn;
  }

  //Setter function of companyId.
  public setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
