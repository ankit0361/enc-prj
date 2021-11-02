import { TestBed } from '@angular/core/testing';

import { ContactPersonDetailsService } from './contact-person-details.service';

describe('ContactPersonDetailsService', () => {
  let service: ContactPersonDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactPersonDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
