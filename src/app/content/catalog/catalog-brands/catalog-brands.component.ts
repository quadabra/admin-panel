import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog-brands',
  templateUrl: './catalog-brands.component.html',
  styleUrls: ['./catalog-brands.component.css']
})
export class CatalogBrandsComponent implements OnInit {
  dataSource = [
    {
      name: 'SSO',
      overprice: 70,
      brands: [
        {
          name: 'SSO'
        },
        {
          name: 'huita'
        },
        {
          name: 'azaza'
        }
      ]
    },
    {
      name: 'Anatomiya',
      overprice: 50,
      brands: [
        {
          name: 'ANA'
        }
      ]
    },
    {
      name: 'Techincom',
      overprice: 30,
      brands: [
        {
          name: 'Techincome'
        }
      ]
    }
  ];

  brandList = ['ANA', 'SSO', 'Techincome'];

  constructor() {
  }

  ngOnInit() {
  }

}
