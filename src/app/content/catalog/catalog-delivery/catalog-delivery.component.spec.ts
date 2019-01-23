import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDeliveryComponent } from './catalog-delivery.component';

describe('CatalogDeliveryComponent', () => {
  let component: CatalogDeliveryComponent;
  let fixture: ComponentFixture<CatalogDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
