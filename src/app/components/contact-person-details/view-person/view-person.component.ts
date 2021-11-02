import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactPersonDetails } from 'src/app/models/ContactPersonDetails';
import { ContactPersonDetailsService } from 'src/app/services/contact-person-details.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {

  public name: string;
  public country: string;
  public phone: string;
  public isNewPerson: boolean = true;
  private personData: ContactPersonDetails;
  private companyId: number;

  constructor(private _contactPersonDetailsService: ContactPersonDetailsService, private _router: Router) { }

  ngOnInit(): void {
    this.personData = this._contactPersonDetailsService.getPersonData();
    if (this.personData) {
      this.isNewPerson = false;
      this.initializeData();
    }
    else {
      this.isNewPerson = true;
      this.companyId = this._contactPersonDetailsService.getCompanyId();
    }
  }

  //Initialize data if user edit the person data.
  private initializeData() {
    this.name = this.personData.name;
    this.phone = this.personData.phone;
    this.country = this.personData.country;
  }

  //Function to add the new person data.
  public addPerson() {
    this._contactPersonDetailsService.addPerson({
      name: this.name,
      phone: this.phone,
      country: this.country
    }).subscribe(response => {
      console.log("Person Added Successfully");
    });
  }

  //Function to edit the existing person data.
  public editPerson() {
    this._contactPersonDetailsService.editPerson({
      name: this.name,
      phone: this.phone,
      country: this.country,
      companyId: this.personData.companyId,
      id: this.personData.id
    }).subscribe(response => {
      console.log("Person Updated Successfully");
    });
  }

  //Function to allow only numbers in phone number textbox.
  public numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  //Function to be called in case of cancel button click.
  public navigateToPreviousScreen() {
    if (this.isNewPerson) {
      this._router.navigate(['/person-details', this.companyId]);
    }
    else {
      this._router.navigate(['/person-details', this.personData.companyId]);
    }
  }
}
