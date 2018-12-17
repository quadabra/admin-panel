import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBrandsComponent } from './catalog-brands.component';

describe('CatalogBrandsComponent', () => {
  let component: CatalogBrandsComponent;
  let fixture: ComponentFixture<CatalogBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
