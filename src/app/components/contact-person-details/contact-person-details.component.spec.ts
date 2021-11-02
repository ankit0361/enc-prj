import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonDetailsComponent } from './contact-person-details.component';

describe('ContactPersonDetailsComponent', () => {
  let component: ContactPersonDetailsComponent;
  let fixture: ComponentFixture<ContactPersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
