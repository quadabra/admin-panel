import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSetupComponent } from './purchase-setup.component';

describe('PurchaseSetupComponent', () => {
  let component: PurchaseSetupComponent;
  let fixture: ComponentFixture<PurchaseSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
