import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {CurrencyComponent} from './currency.component';
import {CurrencySetupComponent} from './currency-setup/currency-setup.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyComponent,
    children: [
      {
        path: '',
        component: CurrencySetupComponent,
      }
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CurrencyRoutingModule {}
