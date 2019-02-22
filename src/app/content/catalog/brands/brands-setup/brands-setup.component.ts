import {Component, OnInit} from '@angular/core';
import {IManufacturer} from '../../../../_model/interface/manufacturer';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../_api/api.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {HeaderControlsService} from '../../../main-nav/nav-header/header-controls.service';

@Component({
  selector: 'app-catalog-brands',
  templateUrl: './brands-setup.component.html',
  styleUrls: ['./brands-setup.component.css']
})
export class BrandsSetupComponent implements OnInit {
  manufacturersList: IManufacturer[];
  brandsList;
  newManufacturerID = 0;
  newBrandID = 0;

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private controls: HeaderControlsService) {
  }

  ngOnInit() {
    this.controls.setTitle('Brands setup');
    this.manufacturersList = this.route.snapshot.data['manufacturers'];
    this.brandsList = this.route.snapshot.data['brands'];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
