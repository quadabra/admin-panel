import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSetupComponent } from './products-setup.component';

describe('ProductsSetupComponent', () => {
  let component: ProductsSetupComponent;
  let fixture: ComponentFixture<ProductsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
