import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassLensesMobileComponent } from './glass-lenses-mobile.component';

describe('GlassLensesMobileComponent', () => {
  let component: GlassLensesMobileComponent;
  let fixture: ComponentFixture<GlassLensesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassLensesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassLensesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
