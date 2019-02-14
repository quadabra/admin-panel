import {Component, OnInit} from '@angular/core';
import {IManufacturer} from '../../../_model/interface/manufacturer';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../_api/api.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-catalog-brands',
  templateUrl: './catalog-brands.component.html',
  styleUrls: ['./catalog-brands.component.css']
})
export class CatalogBrandsComponent implements OnInit {
  dataSource: IManufacturer[];
  manufacturersList: IManufacturer[];
  brandList;
  errorMessage;

  constructor(private route: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit() {
    this.dataSource = this.route.snapshot.data['manufacturers'];
    this.manufacturersList = this.dataSource.map(data =>  data);
    this.api.getAllBrands()
      .subscribe(brands => this.brandList = brands,
        error => this.errorMessage = <any>error);
    console.log(this.brandList);
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
