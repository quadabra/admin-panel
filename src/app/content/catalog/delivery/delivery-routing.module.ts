import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {DeliveryComponent} from './delivery.component';
import {DeliverySetupComponent} from './delivery-setup/delivery-setup.component';
import {DeliveryEditComponent} from './delivery-edit/delivery-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent,
    children: [
      {
        path: '',
        component: DeliverySetupComponent
      },
      {
        path: 'edit',
        component: DeliveryEditComponent
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
export class DeliveryRoutingModule {
}
