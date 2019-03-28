import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assembly-active',
  templateUrl: './assembly-active.component.html',
  styleUrls: ['./assembly-active.component.css']
})
export class AssemblyActiveComponent implements OnInit {
  objectKeys = Object.keys;
  displayedColumns: string[] = ['image', 'name', 'manufacturer', 'options', 'check'];
  isLargeImages = false;

  dataSource = [
    {
      image: 'azaz',
      name: 'razraz',
      manufacturer: 'akakaka',
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
    {
      image: 'azaz',
      name: 'razraz',
      manufacturer: 'akakaka',
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
    {
      image: 'azaz',
      name: 'razraz',
      manufacturer: 'akakaka',
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
    {
      image: 'azaz',
      name: 'razraz',
      manufacturer: 'akakaka',
      options: {
        size: '32',
        height: '43',
        color: 'green',
      }
    },
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleImageSize(): void {
    this.isLargeImages = !this.isLargeImages;
  }

}
