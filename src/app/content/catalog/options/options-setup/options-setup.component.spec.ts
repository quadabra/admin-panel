import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSetupComponent } from './options-setup.component';

describe('OptionsSetupComponent', () => {
  let component: OptionsSetupComponent;
  let fixture: ComponentFixture<OptionsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
