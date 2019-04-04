import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {PaymentsComponent} from './payments.component';
import {PaymentsSetupComponent} from './payments-setup/payments-setup.component';
import {PaymentsEditComponent} from './payments-edit/payments-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsComponent,
    children: [
      {
        path: '',
        component: PaymentsSetupComponent
      },
      {
        path: 'edit',
        component: PaymentsEditComponent
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
export class PaymentsRoutingModule {
}
