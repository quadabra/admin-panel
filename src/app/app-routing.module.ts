import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './content/welcome/welcome.component';
import {CatalogProductsComponent} from './content/catalog/catalog-products/catalog-products.component';
import {CatalogBrandsComponent} from './content/catalog/catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './content/catalog/catalog-options/catalog-options.component';
import {CatalogResolverService} from './content/catalog/catalog-products/catalog-resolver.service';

const routes: Routes = [
  {
    path: 'index',
    component: WelcomeComponent,
    data: {
      breadcrumb: 'index'
    }
  },
  {
    path: 'catalog',
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'products',
        component: CatalogProductsComponent,
        resolve: {productList: CatalogResolverService},
        data: {
          displayName: 'Products',
          iconName: 'list'
        }
      },
      {
        path: 'brands',
        component: CatalogBrandsComponent,
        data: {
          displayName: 'Brands',
          iconName: 'star_border'
        }
      },
      {
        path: 'options',
        component: CatalogOptionsComponent,
        data: {
          displayName: 'Options',
          iconName: 'settings'
        }
      },
    ],
    data: {
      displayName: 'Catalog',
      iconName: 'reorder'
    }
  },
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
