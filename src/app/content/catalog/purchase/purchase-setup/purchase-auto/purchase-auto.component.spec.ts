import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAutoComponent } from './purchase-auto.component';

describe('PurchaseAutoComponent', () => {
  let component: PurchaseAutoComponent;
  let fixture: ComponentFixture<PurchaseAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
