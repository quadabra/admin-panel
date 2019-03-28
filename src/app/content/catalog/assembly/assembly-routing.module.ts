import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {AssemblyComponent} from './assembly.component';
import {AssemblySetupComponent} from './assembly-setup/assembly-setup.component';
import {AssemblyActiveComponent} from './assembly-active/assembly-active.component';

// Resolvers

const routes: Routes = [
  {
    path: '',
    component: AssemblyComponent,
    children: [
      {
        path: '',
        component: AssemblySetupComponent
      },
      {
        path: 'active',
        component: AssemblyActiveComponent
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
export class AssemblyRoutingModule {
}
