import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImagesComponent } from './details-images.component';

describe('DetailsImagesComponent', () => {
  let component: DetailsImagesComponent;
  let fixture: ComponentFixture<DetailsImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
