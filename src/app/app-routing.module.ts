import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { ContactPersonDetailsComponent } from './components/contact-person-details/contact-person-details.component';
import { ViewPersonComponent } from './components/contact-person-details/view-person/view-person.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'company-details',
    component: CompanyDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'person-details/:companyId',
    component: ContactPersonDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'view',
    component: ViewPersonComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
