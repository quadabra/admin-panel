import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImageFormComponent } from './details-image-form.component';

describe('DetailsImageFormComponent', () => {
  let component: DetailsImageFormComponent;
  let fixture: ComponentFixture<DetailsImageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsImageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
