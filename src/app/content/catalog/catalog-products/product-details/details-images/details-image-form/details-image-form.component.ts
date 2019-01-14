import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-details-image-form',
  templateUrl: './details-image-form.component.html',
  styleUrls: ['./details-image-form.component.css']
})
export class DetailsImageFormComponent implements OnInit {
@Input() dataSource;
params = [
  {name: 'Size',
    values: ['42-44', '48-50', '52-54', '56-58', '60-62'],
  },
  {
    name: 'Height',
    values: ['2', '3', '4', '5'],
  },
  {
    name: 'Type',
    values: ['Army Cap', 'Baseball version']
  }
];
imageOptions = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
