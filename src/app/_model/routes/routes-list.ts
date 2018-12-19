import {WelcomeComponent} from '../../content/welcome/welcome.component';
import {CatalogProductsComponent} from '../../content/catalog/catalog-products/catalog-products.component';
import {CatalogBrandsComponent} from '../../content/catalog/catalog-brands/catalog-brands.component';

export class RoutesList {
  routesMain = [
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
          path: 'products',
          component: CatalogProductsComponent,
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
          component: CatalogProductsComponent,
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
}
