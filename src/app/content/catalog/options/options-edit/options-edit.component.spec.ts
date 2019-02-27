import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsEditComponent } from './options-edit.component';

describe('OptionsEditComponent', () => {
  let component: OptionsEditComponent;
  let fixture: ComponentFixture<OptionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
