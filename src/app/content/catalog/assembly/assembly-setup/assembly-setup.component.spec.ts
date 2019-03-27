import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblySetupComponent } from './assembly-setup.component';

describe('AssemblySetupComponent', () => {
  let component: AssemblySetupComponent;
  let fixture: ComponentFixture<AssemblySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
