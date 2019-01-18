import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogOptionsEditComponent } from './catalog-options-edit.component';

describe('CatalogOptionsEditComponent', () => {
  let component: CatalogOptionsEditComponent;
  let fixture: ComponentFixture<CatalogOptionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogOptionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogOptionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
