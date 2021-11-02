import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  constructor(private _http: HttpClient) { }

  //Function to get the company details from the backend api.
  public getCompanyDetails(): Observable<any> {
    return this._http.get(environment.companyDetailsURL + "companies");
  }
}
