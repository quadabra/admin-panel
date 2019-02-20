import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {BrandsComponent} from './brands.component';
import {BrandsSetupComponent} from './brands-setup/brands-setup.component';
import {BrandEditComponent} from './brand-edit/brand-edit.component';
import {ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';

//  Resolvers
import {ManufacturersResolverService} from './brands-setup/manufacturers-resolver.service';
import {BrandsResolverService} from './brands-setup/brands-resolver.service';
import {ManufacturerResolverService} from './manufacturer-edit/manufacturer-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BrandsComponent,
    children: [
      {
        path: '',
        component: BrandsSetupComponent,
        resolve: {
          manufacturers: ManufacturersResolverService,
          brands: BrandsResolverService
        },
      },
      {
        path: 'manufacturer/:id',
        component: ManufacturerEditComponent,
        resolve: {manufacturer: ManufacturerResolverService}
      },
      {
        path: 'brand/:id',
        component: BrandEditComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ManufacturersResolverService, BrandsResolverService, ManufacturerResolverService]
})
export class BrandsRoutingModule {
}
