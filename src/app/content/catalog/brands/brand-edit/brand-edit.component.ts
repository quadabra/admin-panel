import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ManufacturerApiService} from '../manufacturer-edit/manufacturer-api.service';
import {HeaderControlsService} from '../../../main-nav/nav-header/header-controls.service';
import {IBrand} from '../../../../_model/interface/brand';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  langs = ['EN', 'RU'];
  brand: IBrand;
  brandForm: FormGroup;
  public Editor = ClassicEditor;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private api: ManufacturerApiService,
              private controls: HeaderControlsService) {
  }

  ngOnInit() {
    this.brand = this.route.snapshot.data['brand'];
    console.log(this.brand);
    this.brandForm = this.fb.group({
      name: ['', [Validators.required]],
      priority: [''],
      priority_power: [''],
      seo_keyword: [''],
    });
  }

}
