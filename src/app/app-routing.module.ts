import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {LoginComponent} from './login/login.component';

//  services
import {AuthGuardService} from './_guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    loadChildren: '../app/content/content.module#ContentModule',
  },
  // {
  //   path: '',
  //   redirectTo: 'content',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
