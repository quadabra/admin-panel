import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_api/auth.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  logOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.auth.setUser(null);
  }
}
