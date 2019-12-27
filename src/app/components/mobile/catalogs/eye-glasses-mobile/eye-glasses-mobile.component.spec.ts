import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeGlassesMobileComponent } from './eye-glasses-mobile.component';

describe('EyeGlassesMobileComponent', () => {
  let component: EyeGlassesMobileComponent;
  let fixture: ComponentFixture<EyeGlassesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeGlassesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeGlassesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
