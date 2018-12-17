import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './content/welcome/welcome.component';

const routes: Routes = [
  {path: 'index', component: WelcomeComponent, data: {breadcrumb: 'index'}},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
