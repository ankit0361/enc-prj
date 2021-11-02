import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private _loginService: LoginService) { }

  canActivate(): boolean {
    if (!this._loginService.getIsLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
