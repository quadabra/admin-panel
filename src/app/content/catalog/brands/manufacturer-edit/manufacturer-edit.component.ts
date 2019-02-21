import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IManufacturer} from '../../../../_model/interface/manufacturer';
import {ActivatedRoute, Router} from '@angular/router';
import {ManufacturerApiService} from './manufacturer-api.service';

@Component({
  selector: 'app-manufacturer-edit',
  templateUrl: './manufacturer-edit.component.html',
  styleUrls: ['./manufacturer-edit.component.css']
})
export class ManufacturerEditComponent implements OnInit {
  manufacturer: IManufacturer;
  manufacturerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private api: ManufacturerApiService) {
  }

  ngOnInit() {
    this.manufacturerForm = this.fb.group({
      name: ['', [Validators.required]],
      added_value: ['', [Validators.required]],
      color: [''],
      contact_person: [''],
      site: [''],
      email: [],
      vk: [''],
      phone: [''],
      bank: [''],
      contract: [''],
      sales: [''],
      address: [''],
      shipping: [''],
      comment: [''],
    });
    this.manufacturer = this.route.snapshot.data['manufacturer'];
    console.log(this.manufacturer);
  }

  onSaveComplete(): void {
    console.log('done!');
  }

  save(): void {
    if (!this.manufacturer.entry) {
      this.api.createManufacturer(this.manufacturerForm.value).subscribe(
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
      );
      console.log(this.manufacturerForm.value);
      this.router.navigate(['/catalog/brands']);
    } else {
      this.manufacturerForm.value.brands = this.manufacturer.brands;
      this.manufacturerForm.value.entry = this.manufacturer.entry;
      this.api.updateManufacturer(this.manufacturerForm.value).subscribe(
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
      );
      console.log(this.manufacturerForm.value);
      this.router.navigate(['/catalog/brands']);
    }
  }
}
