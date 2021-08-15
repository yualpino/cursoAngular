import { TestBed } from '@angular/core/testing';

import { UiYpComponentsService } from './ui-yp-components.service';

describe('UiYpComponentsService', () => {
  let service: UiYpComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiYpComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
