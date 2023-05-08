import { TestBed } from '@angular/core/testing';

import { NasaAPODService } from './nasa-apod.service';

describe('NasaAPODService', () => {
  let service: NasaAPODService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaAPODService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
