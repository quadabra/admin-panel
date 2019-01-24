import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDeliveryEditComponent } from './catalog-delivery-edit.component';

describe('CatalogDeliveryEditComponent', () => {
  let component: CatalogDeliveryEditComponent;
  let fixture: ComponentFixture<CatalogDeliveryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogDeliveryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDeliveryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
