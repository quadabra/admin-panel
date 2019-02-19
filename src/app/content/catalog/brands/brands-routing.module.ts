import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {BrandsSetupComponent} from './brands-setup/brands-setup.component';
import {BrandEditComponent} from './brand-edit/brand-edit.component';
import {ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';

//  Resolvers
import {ManufacturersResolverService} from './brands-setup/manufacturers-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: BrandsSetupComponent,
    resolve: {manufacturers: ManufacturersResolverService},
    children: [
      {
        path: 'edit',
        component: ManufacturerEditComponent,
      },
      {
        path: 'brand',
        component: BrandEditComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule {
}
