import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './content/welcome/welcome.component';
import {CatalogProductsComponent} from './content/catalog/catalog-products/catalog-products.component';
import {CatalogBrandsComponent} from './content/catalog/catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './content/catalog/catalog-options/catalog-options.component';
import {CatalogResolverService} from './content/catalog/catalog-products/catalog-resolver.service';
import {ProductDetailsComponent} from './content/catalog/catalog-products/product-details/product-details.component';
import {ProductResolverService} from './content/catalog/catalog-products/product-resolver.service';
import {CatalogOptionsEditComponent} from './content/catalog/catalog-options/catalog-options-edit/catalog-options-edit.component';
import {ManufacturerEditComponent} from './content/catalog/catalog-brands/manufacturer-edit/manufacturer-edit.component';
import {BrandEditComponent} from './content/catalog/catalog-brands/brand-edit/brand-edit.component';
import {CatalogDeliveryComponent} from './content/catalog/catalog-delivery/catalog-delivery.component';

const routes: Routes = [
  {
    path: 'index',
    component: WelcomeComponent,
    data: {
      displayName: 'index'
    }
  },
  {
    path: 'catalog',
    children: [
      {
        path: '',
        component: WelcomeComponent,
        data: {
          displayName: 'Admin-panel'
        },
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: CatalogProductsComponent,
            resolve: {productList: CatalogResolverService},
            data: {displayName: 'Products'},
          },
          {
            path: ':id',
            component: ProductDetailsComponent,
            resolve: {product: ProductResolverService},
            data: {displayName: 'Products'}
          }
        ],
        data: {
          displayName: 'Products',
          iconName: 'list'
        }
      },
      {
        path: 'brands',
        children: [
          {
            path: '',
            component: CatalogBrandsComponent,
          },
          {
            path: 'edit',
            component: ManufacturerEditComponent,
          },
          {
            path: 'brand',
            component: BrandEditComponent,
          }
        ]
      },
      {
        path: 'options',
        children: [
          {
            path: '',
            component: CatalogOptionsComponent,
            data: {
              displayName: 'Options'
            }
          },
          {
            path: 'edit',
            component: CatalogOptionsEditComponent,
          }
        ]
      },
      {
        path: 'delivery',
        children: [
          {
            path: '',
            component: CatalogDeliveryComponent,
          }
        ]
      }
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
