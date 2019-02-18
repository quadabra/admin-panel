import {Component, OnInit} from '@angular/core';
import {NavList} from '../../../_model/nav/nav-list';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  navList = new NavList();
  constructor() {
  }

  ngOnInit() {
  }

}
