import { TestBed } from '@angular/core/testing';

import { ComunicaIndexedDBService } from './comunica-indexeddb.service';

describe('ComunicaIndexedDBService', () => {
  let service: ComunicaIndexedDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaIndexedDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
