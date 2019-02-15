import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {WelcomeComponent} from './content/welcome/welcome.component';
import {CatalogProductsComponent} from './content/catalog/catalog-products/catalog-products.component';
import {CatalogBrandsComponent} from './content/catalog/catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './content/catalog/catalog-options/catalog-options.component';
import {ProductDetailsComponent} from './content/catalog/catalog-products/product-details/product-details.component';
import {CatalogOptionsEditComponent} from './content/catalog/catalog-options/catalog-options-edit/catalog-options-edit.component';
import {ManufacturerEditComponent} from './content/catalog/catalog-brands/manufacturer-edit/manufacturer-edit.component';
import {BrandEditComponent} from './content/catalog/catalog-brands/brand-edit/brand-edit.component';
import {CatalogDeliveryComponent} from './content/catalog/catalog-delivery/catalog-delivery.component';
import {CatalogDeliveryEditComponent} from './content/catalog/catalog-delivery/catalog-delivery-edit/catalog-delivery-edit.component';
import {WhOrdersComponent} from './content/wh/wh-orders/wh-orders.component';
import {WhIncomingComponent} from './content/wh/wh-incoming/wh-incoming.component';
import {WhIncomingEditComponent} from './content/wh/wh-incoming/wh-incoming-edit/wh-incoming-edit.component';
import {WhOrderDetailsComponent} from './content/wh/wh-orders/wh-order-details/wh-order-details.component';
import {WhIncomingCheckComponent} from './content/wh/wh-incoming/wh-incoming-check/wh-incoming-check.component';

//  resolvers
import {CatalogResolverService} from './content/catalog/catalog-products/catalog-resolver.service';
import {ProductResolverService} from './content/catalog/catalog-products/product-resolver.service';
import {CatalogBrandsResolverService} from './content/catalog/catalog-brands/catalog-brands-resolver.service';

//  services
import {AuthGuardService} from './_guards/auth-guard.service';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {MainNavComponent} from './main-nav/main-nav.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: 'index',
    component: MainNavComponent,
    canActivate: [AuthGuardService]
  },
  // {
  //   path: 'index',
  //   component: WelcomeComponent,
  //   outlet: 'main',
  //   data: {
  //     displayName: 'index'
  //   }
  // },
  {
    path: 'catalog',
    outlet: 'main',
    children: [
      {
        path: '',
        outlet: 'main',
        component: WelcomeComponent,
        canActivate: [AuthGuardService],
        data: {displayName: 'Admin-panel'},
      },
      {
        path: 'products',
        outlet: 'main',
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
            resolve: {manufacturers: CatalogBrandsResolverService}
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
          },
          {
            path: 'edit',
            component: CatalogDeliveryEditComponent,
          },
        ]
      }
    ],
    data: {
      displayName: 'Catalog',
      iconName: 'reorder'
    }
  },
  {
    path: 'warehouse',
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            component: WhOrdersComponent,
          },
          {
            path: 'order',
            component: WhOrderDetailsComponent,
          }
        ],
      },
      {
        path: 'incoming',
        children: [
          {
            path: '',
            component: WhIncomingComponent,
          },
          {
            path: 'edit',
            component: WhIncomingEditComponent,
          },
          {
            path: 'check',
            component: WhIncomingCheckComponent,
          }
        ]
      },
    ]
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
