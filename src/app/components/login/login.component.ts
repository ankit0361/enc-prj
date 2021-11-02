import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public showPasswordError: boolean = false;
  public invalidUser: boolean = false;

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  //Function to check the password checks.
  public checkPassword() {
    let specialCharacterCheck = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (this.password?.length >= 8 && this.password?.length <= 16) {
      if (specialCharacterCheck.test(this.password) && /[A-Z]/.test(this.password)) {
        this.showPasswordError = false;
      }
      else {
        this.showPasswordError = true;
      }
    }
    else {
      this.showPasswordError = true;
    }
  }

  //Function to validate the user and logins the user, if valid.
  public login() {
    if (!this.showPasswordError) {
      this._loginService.validateUser().subscribe(response => {
        if (response) {
          let user = response.filter(record => {
            return record.email === this.email
          });
          if (user.length) {
            this._router.navigate(['/company-details']);
            this.invalidUser = false;
            this._loginService.setIsLoggedIn(true);
          }
          else {
            this.invalidUser = true;
          }
        }
      });
    }
  }
}
