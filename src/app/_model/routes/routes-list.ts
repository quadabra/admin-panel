import {WelcomeComponent} from '../../content/welcome/welcome.component';

export class RoutesList {
  routes = [
    {path: 'index', component: WelcomeComponent, data: {breadcrumb: 'index'}},
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: '**', component: WelcomeComponent},
  ];
}
