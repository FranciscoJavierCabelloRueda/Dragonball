import { TestBed } from '@angular/core/testing';

import { ComunicaIndexeddbService } from './comunica-indexeddb.service';

describe('ComunicaIndexeddbService', () => {
  let service: ComunicaIndexeddbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaIndexeddbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
