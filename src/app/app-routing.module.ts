import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {LoginComponent} from './login/login.component';

//  services
import {AuthGuardService} from './_guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    loadChildren: '../app/content/content.module#ContentModule',
  },
  // {
  //   path: 'catalog',
  //   // outlet: 'main',
  //   children: [
  //     {
  //       path: '',
  //       // outlet: 'main',
  //       component: WelcomeComponent,
  //       canActivate: [AuthGuardService],
  //       data: {displayName: 'Admin-panel'},
  //     },
  //     {
  //       path: 'products',
  //       // outlet: 'main',
  //       children: [
  //         {
  //           path: '',
  //           // outlet: 'main',
  //           component: CatalogProductsComponent,
  //           resolve: {productList: CatalogResolverService},
  //           data: {displayName: 'Products'},
  //         },
  //         {
  //           path: ':id',
  //           component: ProductDetailsComponent,
  //           resolve: {product: ProductResolverService},
  //           data: {displayName: 'Products'}
  //         }
  //       ],
  //       data: {
  //         displayName: 'Products',
  //         iconName: 'list'
  //       }
  //     },
  //     {
  //       path: 'brands',
  //       children: [
  //         {
  //           path: '',
  //           component: CatalogBrandsComponent,
  //           resolve: {manufacturers: CatalogBrandsResolverService}
  //         },
  //         {
  //           path: 'edit',
  //           component: ManufacturerEditComponent,
  //         },
  //         {
  //           path: 'brand',
  //           component: BrandEditComponent,
  //         }
  //       ]
  //     },
  //     {
  //       path: 'options',
  //       children: [
  //         {
  //           path: '',
  //           component: CatalogOptionsComponent,
  //           data: {
  //             displayName: 'Options'
  //           }
  //         },
  //         {
  //           path: 'edit',
  //           component: CatalogOptionsEditComponent,
  //         }
  //       ]
  //     },
  //     {
  //       path: 'delivery',
  //       children: [
  //         {
  //           path: '',
  //           component: CatalogDeliveryComponent,
  //         },
  //         {
  //           path: 'edit',
  //           component: CatalogDeliveryEditComponent,
  //         },
  //       ]
  //     }
  //   ],
  //   data: {
  //     displayName: 'Catalog',
  //     iconName: 'reorder'
  //   }
  // },
  // {
  //   path: 'warehouse',
  //   children: [
  //     {
  //       path: '',
  //       component: WelcomeComponent,
  //     },
  //     {
  //       path: 'orders',
  //       children: [
  //         {
  //           path: '',
  //           component: WhOrdersComponent,
  //         },
  //         {
  //           path: 'order',
  //           component: WhOrderDetailsComponent,
  //         }
  //       ],
  //     },
  //     {
  //       path: 'incoming',
  //       children: [
  //         {
  //           path: '',
  //           component: WhIncomingComponent,
  //         },
  //         {
  //           path: 'edit',
  //           component: WhIncomingEditComponent,
  //         },
  //         {
  //           path: 'check',
  //           component: WhIncomingCheckComponent,
  //         }
  //       ]
  //     },
  //   ]
  // },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
