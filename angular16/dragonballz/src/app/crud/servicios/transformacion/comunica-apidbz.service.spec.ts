import { TestBed } from '@angular/core/testing';

import { ComunicaApidbzService } from './comunica-apidbz.service';

describe('ComunicaApidbzService', () => {
  let service: ComunicaApidbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaApidbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
