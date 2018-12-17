export class NavList {
  items = [
    {
      displayName: 'Catalog',
      iconName: 'reorder',
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
      displayName: 'Delivery',
      iconName: 'send',
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
