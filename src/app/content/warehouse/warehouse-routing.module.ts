import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {WarehouseComponent} from './warehouse.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseRoutingModule {
}
