import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assembly-setup',
  templateUrl: './assembly-setup.component.html',
  styleUrls: ['./assembly-setup.component.css']
})
export class AssemblySetupComponent implements OnInit {
  orderList = [
    {
      id: 432531,
      weight: 2,
      type_color: 'green',
    },
    {
      id: 234412,
      weight: 0.4,
      type_color: 'cyan',
    },
    {
      id: 463411,
      weight: 12,
      type_color: 'orange',
    },
    {
      id: 324131,
      weight: 5,
      type_color: 'teal',
    },
    {
      id: 978631,
      weight: 1,
      type_color: 'grey',
    },
    {
      id: 543611,
      weight: 1.5,
      type_color: 'lightskyblue',
    },
    {
      id: 123431,
      weight: 3,
      type_color: 'greenyellow',
    },
    {
      id: 432531,
      weight: 2,
      type_color: 'green',
    },
    {
      id: 234412,
      weight: 0.4,
      type_color: 'cyan',
    },
    {
      id: 463411,
      weight: 12,
      type_color: 'orange',
    },
    {
      id: 324131,
      weight: 5,
      type_color: 'teal',
    },
    {
      id: 978631,
      weight: 1,
      type_color: 'grey',
    },
    {
      id: 543611,
      weight: 1.5,
      type_color: 'lightskyblue',
    },
    {
      id: 123431,
      weight: 3,
      type_color: 'greenyellow',
    },
    {
      id: 432531,
      weight: 2,
      type_color: 'green',
    },
    {
      id: 234412,
      weight: 0.4,
      type_color: 'cyan',
    },
    {
      id: 463411,
      weight: 12,
      type_color: 'orange',
    },
    {
      id: 324131,
      weight: 5,
      type_color: 'teal',
    },
    {
      id: 978631,
      weight: 1,
      type_color: 'grey',
    },
    {
      id: 543611,
      weight: 1.5,
      type_color: 'lightskyblue',
    },
    {
      id: 123431,
      weight: 3,
      type_color: 'greenyellow',
    },
    {
      id: 432531,
      weight: 2,
      type_color: 'green',
    },
    {
      id: 234412,
      weight: 0.4,
      type_color: 'cyan',
    },
    {
      id: 463411,
      weight: 12,
      type_color: 'orange',
    },
    {
      id: 324131,
      weight: 5,
      type_color: 'teal',
    },
    {
      id: 978631,
      weight: 1,
      type_color: 'grey',
    },
    {
      id: 543611,
      weight: 1.5,
      type_color: 'lightskyblue',
    },
    {
      id: 123431,
      weight: 3,
      type_color: 'greenyellow',
    },
    ];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.orderList);
  }

  activateAssembly(): void {
    this.router.navigate(['catalog/assembly/active']);
  }
}
