import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPropertiesComponent } from './details-properties.component';

describe('DetailsPropertiesComponent', () => {
  let component: DetailsPropertiesComponent;
  let fixture: ComponentFixture<DetailsPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
