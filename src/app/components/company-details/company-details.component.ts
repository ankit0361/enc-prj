import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetails } from '../../models/CompanyDetails';
import { CompanyDetailsService } from '../../services/company-details.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public companyDetails: CompanyDetails[];

  constructor(private _companyDetailsService: CompanyDetailsService, private _router: Router) { }

  ngOnInit(): void {
    this.getCompanyDetails();
  }

  //Function to get all the company details.
  public getCompanyDetails() {
    this._companyDetailsService.getCompanyDetails().subscribe(response => {
      this.companyDetails = response;
    });
  }

  //Function to navigate to see the person-details.
  public navigateToCompanyDetails(companyId: number) {
    this._router.navigate(['/person-details', companyId]);
  }

}
