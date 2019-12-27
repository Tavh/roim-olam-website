import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLensesMobileComponent } from './contact-lenses-mobile.component';

describe('ContactLensesMobileComponent', () => {
  let component: ContactLensesMobileComponent;
  let fixture: ComponentFixture<ContactLensesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactLensesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLensesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
