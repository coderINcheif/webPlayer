import { TestBed } from '@angular/core/testing';

import { FormErrorHandler } from './form-error-handler.service';

describe('FormErrorHandler', () => {
  let service: FormErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
