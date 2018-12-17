import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogOptionsComponent } from './catalog-options.component';

describe('CatalogOptionsComponent', () => {
  let component: CatalogOptionsComponent;
  let fixture: ComponentFixture<CatalogOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
