import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {IncomingComponent} from './incoming.component';
import {IncomingSetupComponent} from './inconimg-setup/incoming-setup.component';
import {IncomingCheckComponent} from './incoming-check/incoming-check.component';
import {IncomingEditComponent} from './incoming-edit/incoming-edit.component';

const routes: Routes = [
  {
    path: '',
    component: IncomingComponent,
    children: [
      {
        path: '',
        component: IncomingSetupComponent
      },
      {
        path: 'edit',
        component: IncomingEditComponent,
      },
      {
        path: 'check',
        component: IncomingCheckComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class IncomingRoutingModule {
}
