import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {OptionsComponent} from './options.component';
import {OptionsEditComponent} from './options-edit/options-edit.component';
import {OptionsSetupComponent} from './options-setup/options-setup.component';

//  Resolvers

const routes: Routes = [
  {
    path: '',
    component: OptionsComponent,
    children: [
      {
        path: '',
        component: OptionsSetupComponent,
      },
      {
        path: 'edit',
        component: OptionsEditComponent,
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
export class OptionsRoutingModule {
}
