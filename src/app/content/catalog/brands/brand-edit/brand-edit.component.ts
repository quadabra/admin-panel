import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ManufacturerApiService} from '../manufacturer-edit/manufacturer-api.service';
import {IBrand} from '../../../../_model/interface/brand';
import {LanguageService} from '../../../../_api/language.service';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {ILanguage} from '../../../../_model/interface/language';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  langs = ['EN', 'ES'];
  productLanguage: Observable<ILanguage[]>;
  brand: IBrand;
  brandForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private api: ManufacturerApiService,
              private languages: LanguageService,
              ) {
  }

  getLangs(): {} {
    return this.langs.reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
  }

  save(): void {
    console.log({...this.brand, ...this.brandForm.value});
  }

  ngOnInit() {
    this.productLanguage = this.languages.getProductLangs();
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
