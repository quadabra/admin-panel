import {Component, OnInit} from '@angular/core';
import {IUser} from './_model/interface/user';
import {AuthService} from './_api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';
  user: IUser;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.initUser();
  }
}
