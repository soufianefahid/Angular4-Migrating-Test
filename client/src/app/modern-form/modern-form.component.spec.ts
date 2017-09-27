import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernFormComponent } from './modern-form.component';

describe('ModernFormComponent', () => {
  let component: ModernFormComponent;
  let fixture: ComponentFixture<ModernFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
