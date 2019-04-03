import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyActiveComponent } from './assembly-active.component';

describe('AssemblyActiveComponent', () => {
  let component: AssemblyActiveComponent;
  let fixture: ComponentFixture<AssemblyActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
