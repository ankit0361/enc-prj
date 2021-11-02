import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactPersonDetails } from '../models/ContactPersonDetails';

@Injectable({
  providedIn: 'root'
})
export class ContactPersonDetailsService {

  private personData: ContactPersonDetails;
  private companyId: number;

  constructor(private _http: HttpClient) { }

  // Function to get the contact person details from backend API. 
  public getPersonDetails(): Observable<any> {
    return this._http.get(environment.personDetailsURL + "contacts");
  }

  //Function to delete the contact person based on companyId and personId.
  public deletePerson(companyId: number, personId: number): Observable<any> {
    let url = "deleteURL";
    return this._http.get(environment.personDetailsURL + "contacts");
    //Delete URL need to be used instead of this URL. Also we need to pass companyId and personId as Query Parameters.
    //Also, we need to call this._http.delete instead of get.
  }

  //Getter function of personData.
  public getPersonData() {
    return this.personData;
  }

  //Setter function of personData.
  public setPersonData(personData: ContactPersonDetails) {
    this.personData = personData;
  }

  //Getter function of companyId.
  public getCompanyId() {
    return this.companyId;
  }

  //Setter function of companyId.
  public setCompanyId(companyId: number) {
    this.companyId = companyId;
  }

  //Function to add person details by calling backend api.
  public addPerson(payload: object) {
    let url = "postURL";
    return this._http.get(environment.personDetailsURL + "contacts");
    //Post URL need to be used instead of this URL. Also we need to pass the Payload in the second parameter of Post function.
    //Also, we need to call this._http.post instead of get.
  }

  //Function to edit person details by calling backend api.
  public editPerson(payload: object) {
    let url = "putURL";
    return this._http.get(environment.personDetailsURL + "contacts");
    //Put URL need to be used instead of this URL. Also we need to pass the Payload in the second parameter of Put function.
    //Also, we need to call this._http.put instead of get.
  }
}
