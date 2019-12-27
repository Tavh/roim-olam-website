import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunGlassesMobileComponent } from './sun-glasses-mobile.component';

describe('SunGlassesMobileComponent', () => {
  let component: SunGlassesMobileComponent;
  let fixture: ComponentFixture<SunGlassesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunGlassesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunGlassesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
