import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {PurchaseComponent} from './purchase.component';
import {PurchaseSetupComponent} from './purchase-setup/purchase-setup.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      {
        path: '',
        component: PurchaseSetupComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PurchaseRoutingModule { }
