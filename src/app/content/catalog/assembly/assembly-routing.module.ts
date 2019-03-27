import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {AssemblyComponent} from './assembly.component';
import {AssemblySetupComponent} from './assembly-setup/assembly-setup.component';

// Resolvers

const routes: Routes = [
  {
    path: '',
    component: AssemblyComponent,
    children: [
      {
        path: '',
        component: AssemblySetupComponent
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
