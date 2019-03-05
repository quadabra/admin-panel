import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {IUser} from '../_model/interface/user';
import {Router} from '@angular/router';
import {UrlConfigService} from './url-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser;

  constructor(private _api: ApiService,
              private _http: HttpClient,
              private router: Router,
              private urlConfig: UrlConfigService) {
  }

  logIn(login: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(login + ':' + password)
      })
    };
    return this._http.post<any>(this.urlConfig.getAuthUrl(), {}, httpOptions)
      .pipe(map(user => {
        if (user && user.auth_key) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.setUser(user);
          this.router.navigate(['/welcome']);
        }
        return user;
      }));
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.user = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  getUser(): any {
    return this.user;
  }

  setUser(user: IUser): void {
    this.user = user;
  }

  initUser() {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }
}
