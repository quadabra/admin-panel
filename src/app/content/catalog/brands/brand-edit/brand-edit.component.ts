import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrandApiService} from './brand-api.service';
import {IBrand} from '../../../../_model/interface/brand';
import {LanguageService} from '../../../../_api/language.service';
import {ILanguage} from '../../../../_model/interface/language';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  productLanguage: ILanguage[];
  brand: IBrand;
  brandForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private api: BrandApiService,
              private languages: LanguageService,
  ) {}

  getLangs(): {} {
    return this.productLanguage.map(data => data.code).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
  }

  onSaveComplete(): void {
    console.log('done!');
    this.router.navigate(['/catalog/brands']);
  }

  save(): void {
    if (!this.brand.id) {
      this.api.createBrand(this.brandForm.value).subscribe(
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
      );
    } else {
      this.api.updateBrand({...this.brand, ...this.brandForm.value}).subscribe(
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
      );
      console.log({...this.brand, ...this.brandForm.value});
    }
  }

  del(): void {
    this.api.deleteBrand(this.brand.id).subscribe(
      () => this.onSaveComplete(),
      (error: any) => console.log(error)
    );
  }

  ngOnInit() {
    this.productLanguage = this.languages.getProductLangs();
    this.brand = this.route.snapshot.data['brand'];
    console.log(this.brand);
    this.brandForm = this.fb.group({
      name: this.fb.group(this.getLangs()),
      description: this.fb.group(this.getLangs()),
      priority: ['', Validators.required],
      priority_power: [''],
      seo_keyword: [''],
    });
    this.brandForm.patchValue(this.brand);
  }

}
