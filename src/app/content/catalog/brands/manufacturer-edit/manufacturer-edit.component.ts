import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IManufacturer} from '../../../../_model/interface/manufacturer';
import {ActivatedRoute, Router} from '@angular/router';
import {ManufacturerApiService} from './manufacturer-api.service';
import {HeaderControlsService} from '../../../main-nav/nav-header/header-controls.service';

@Component({
  selector: 'app-manufacturer-edit',
  templateUrl: './manufacturer-edit.component.html',
  styleUrls: ['./manufacturer-edit.component.css']
})
export class ManufacturerEditComponent implements OnInit {
  manufacturer: IManufacturer;
  manufacturerForm: FormGroup;
  parentRoute: '/catalog/brands';

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private api: ManufacturerApiService,
              private controls: HeaderControlsService) {
  }

  ngOnInit() {
    this.manufacturer = this.route.snapshot.data['manufacturer'];
    this.manufacturerForm = this.fb.group({
      name: ['', [Validators.required]],
      added_value: ['', [Validators.required]],
      color: [''],
      contact_person: [''],
      site: [''],
      email: [''],
      vk: [''],
      phone: [''],
      bank: [''],
      contract: [''],
      sales: [''],
      address: [''],
      shipping: [''],
      comment: [''],
    });
    this.manufacturerForm.patchValue(this.manufacturer);
    this.controls.setTitle(!this.manufacturer.entry ? 'Create new' : 'Edit ' + this.manufacturer.name);
    console.log(this.manufacturer);
  }

  // patch(obj): any {
  //   return Object.keys(obj).map(key => {
  //     if (obj[key] !== '' && obj[key] !== null) {
  //       return key: obj[key];
  //     }
  //   });
  // }

  onSaveComplete(): void {
    console.log('done!');
  }

  goBack(): void {
    this.controls.goBack(this.parentRoute);
  }

  save(): void {
    if (!this.manufacturer.entry) {
      this.api.createManufacturer(this.manufacturerForm.value).subscribe(
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
      );
      console.log(...this.manufacturerForm.value);
      this.goBack();
    } else {
      // this.manufacturerForm.value.brands = this.manufacturer.brands;
      // this.manufacturerForm.value.entry = this.manufacturer.entry;
      this.api.updateManufacturer({...this.manufacturer, ...this.manufacturerForm.value}).subscribe(
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
      );
      console.log({...this.manufacturer, ...this.manufacturerForm.value});
      this.goBack();
    }
  }

  del(): void {
    this.api.deleteManufacturer(this.manufacturer.entry).subscribe(
      () => this.onSaveComplete(),
      (error: any) => console.log(error)
    );
    this.goBack();
  }
}
