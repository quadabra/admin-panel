import {Component, OnInit} from '@angular/core';
import {IUser} from './_model/interface/user';
import {AuthService} from './_api/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';
  user: IUser;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.auth.initUser();
    console.log(this.auth.getUser());
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/welcome']);
    }
  }
}
