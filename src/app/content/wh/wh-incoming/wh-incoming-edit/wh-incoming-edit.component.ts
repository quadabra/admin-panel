import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wh-incoming-edit',
  templateUrl: './wh-incoming-edit.component.html',
  styleUrls: ['./wh-incoming-edit.component.css']
})
export class WhIncomingEditComponent implements OnInit {
  manufacturers = ['SSO', 'ANA', 'Techincome'];
  displayedColumns = ['name', 'options', 'manufacturer', 'count', 'image', 'action'];
  items = ['item1', 'item2', 'item3'];
  dataSource = [
    {
      name: 'item1',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item2',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item3',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item1',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item2',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item3',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },{
      name: 'item1',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item2',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item3',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item1',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item2',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    },
    {
      name: 'item3',
      options: [{type: 'color', value: 'color1'}, {type: 'size', value: 'size1'}, {type: 'height', value: 'height1'}],
      manufacturer: 'ANA',
      quantity: 16,
      image: 'no image'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
