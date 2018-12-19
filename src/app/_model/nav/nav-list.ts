export class NavList {
  items = [
    {
      displayName: 'Catalog',
      iconName: 'reorder',
      route: 'catalog',
      children: [
        {
          displayName: 'Products',
          iconName: 'list',
          route: 'products'
        },
        {
          displayName: 'Brands',
          iconName: 'star_border',
          route: 'brands'
        },
        {
          displayName: 'Options',
          iconName: 'settings',
          route: '/options'
        }
      ]
    },
    {
      displayName: 'Delivery',
      iconName: 'send',
      route: 'catalog',
      children: [
        {
          displayName: 'Products',
          iconName: 'list',
          route: '/products'
        },
        {
          displayName: 'Brands',
          iconName: 'star_border',
          route: '/brands'
        },
        {
          displayName: 'Options',
          iconName: 'settings',
          route: '/options'
        }
      ]
    },
    {
      displayName: 'Store',
      iconName: 'home',
      route: 'catalog',
      children: [
        {
          displayName: 'Items',
          iconName: 'list',
          route: '/products'
        },
        {
          displayName: 'Suppliers',
          iconName: 'star_border',
          route: '/brands'
        },
        {
          displayName: 'Options',
          iconName: 'settings',
          route: '/options'
        }
      ]
    },
    {
      displayName: 'Orders',
      iconName: 'shopping_cart',
      route: 'catalog',
      children: [
        {
          displayName: 'Items',
          iconName: 'list',
          route: '/products'
        },
        {
          displayName: 'Suppliers',
          iconName: 'star_border',
          route: '/brands'
        },
        {
          displayName: 'Options',
          iconName: 'settings',
          route: '/options'
        }
      ]
    },
  ];
}
