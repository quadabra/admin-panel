import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsSetupComponent } from './brands-setup.component';

describe('BrandsSetupComponent', () => {
  let component: BrandsSetupComponent;
  let fixture: ComponentFixture<BrandsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
