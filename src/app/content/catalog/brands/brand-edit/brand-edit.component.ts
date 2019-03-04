import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ManufacturerApiService} from '../manufacturer-edit/manufacturer-api.service';
import {IBrand} from '../../../../_model/interface/brand';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  langs = ['EN', 'ES'];
  brand: IBrand;
  brandForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private api: ManufacturerApiService,
              ) {
  }

  getLangs(): {} {
    const name = {};
    this.langs.forEach(lang => {
      Object.keys(name).push(lang);
      name[lang] = '';
    });
    return name;
  }

  save(): void {
    console.log({...this.brand, ...this.brandForm.value});
  }

  ngOnInit() {
    this.brand = this.route.snapshot.data['brand'];
    console.log(this.brand);
    this.brandForm = this.fb.group({
      name: this.fb.group(this.getLangs()),
      priority: ['', Validators.required],
      priority_power: [''],
      seo_keyword: [''],
    });
    this.brandForm.patchValue(this.brand);
  }

}
