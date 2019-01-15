import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_api/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {UserLogin} from '../_model/interface/user-login';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  error = '';
  userLogin: UserLogin = new UserLogin();

  constructor(private auth: AuthService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  logIn() {
    this.auth.logIn(this.loginForm.get('userEmail').value, this.loginForm.get('userPassword').value)
      .pipe(first())
      .subscribe(
        data => {
          this.auth.user = data;
          // this.router.navigate(['profile']);
        },
        error => {
          this.error = error;
        });
    console.log(this.loginForm.get('userEmail').value, this.loginForm.get('userPassword').value);
  }
}
