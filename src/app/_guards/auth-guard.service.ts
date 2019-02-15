import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../_api/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private  auth: AuthService,
              private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
