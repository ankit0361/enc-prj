import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactPersonDetails } from 'src/app/models/ContactPersonDetails';
import { ContactPersonDetailsService } from 'src/app/services/contact-person-details.service';

@Component({
  selector: 'app-contact-person-details',
  templateUrl: './contact-person-details.component.html',
  styleUrls: ['./contact-person-details.component.css']
})
export class ContactPersonDetailsComponent implements OnInit {

  public contactPersonDetails: ContactPersonDetails[];
  private deleteCompanyId: number;
  private deletePersonId: number;
  private companyId: number;

  constructor(private _route: ActivatedRoute, private _contactPersonDetailsService: ContactPersonDetailsService, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.companyId = params.companyId;
      this.getPersonDetails(params.companyId);
    });
  }

  //Function to get the contact person Details.
  public getPersonDetails(companyId: number) {
    this._contactPersonDetailsService.getPersonDetails().subscribe(response => {
      this.contactPersonDetails = response.filter(record => {
        return +(record.companyId) === +(companyId)
      });
    });
  }

  //Function to trigger the modal on click of delete button.
  public openModal(companyId: number, personId: number) {
    this.deleteCompanyId = companyId;
    this.deletePersonId = personId;
    document.getElementById("openModal").click();
  }

  //Function to delete the selected contact person.
  public deletePerson() {
    this._contactPersonDetailsService.deletePerson(this.deleteCompanyId, this.deletePersonId).subscribe(response => {
      console.log("Person Deleted Successfully");
      this.contactPersonDetails = this.contactPersonDetails.filter(person => {
        return (person.companyId !== this.deleteCompanyId || person.id !== this.deletePersonId);
      });
    });
  }

  //Function to navigate to add person screen.
  public addPerson() {
    this._contactPersonDetailsService.setPersonData(null);
    this._contactPersonDetailsService.setCompanyId(this.companyId);
    this._router.navigate(['/view']);
  }

  //Function to navigate to edit person screen.
  public editPerson(personData: ContactPersonDetails) {
    this._contactPersonDetailsService.setPersonData(personData);
    this._router.navigate(['/view']);
  }

}
