import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOptionsComponent } from './details-options.component';

describe('DetailsOptionsComponent', () => {
  let component: DetailsOptionsComponent;
  let fixture: ComponentFixture<DetailsOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
