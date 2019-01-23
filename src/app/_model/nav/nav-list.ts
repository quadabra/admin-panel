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
          route: 'options'
        },
        {
          displayName: 'Delivery',
          iconName: 'flight',
          route: 'delivery'
        }
      ]
    },
    {
      displayName: 'Warehouse',
      iconName: 'send',
      route: 'catalog',
      children: [
        {
          displayName: 'Store',
          iconName: 'list',
          route: 'store'
        },
        {
          displayName: 'Orders',
          iconName: 'star_border',
          route: 'orders'
        },
        {
          displayName: 'Incoming',
          iconName: 'settings',
          route: 'incoming'
        }
      ]
    },
    {
      displayName: 'Grey-shop',
      iconName: 'shopping_cart',
      route: 'catalog',
      children: [
        {
          displayName: 'Main',
          iconName: 'list',
          route: 'products'
        },
        {
          displayName: 'News',
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
      displayName: 'Administration',
      iconName: 'home',
      route: 'catalog',
      children: [
        {
          displayName: 'Users',
          iconName: 'list',
          route: '/products'
        },
        {
          displayName: 'Service',
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
