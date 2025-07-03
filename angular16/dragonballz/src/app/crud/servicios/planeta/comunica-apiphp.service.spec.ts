import { TestBed } from '@angular/core/testing';

import { ComunicaApiphpService } from './comunica-apiphp.service';

describe('ComunicaApiphpService', () => {
  let service: ComunicaApiphpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaApiphpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
