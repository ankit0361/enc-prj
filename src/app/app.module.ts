import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { ContactPersonDetailsComponent } from './components/contact-person-details/contact-person-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewPersonComponent } from './components/contact-person-details/view-person/view-person.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyDetailsComponent,
    ContactPersonDetailsComponent,
    HeaderComponent,
    ViewPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
