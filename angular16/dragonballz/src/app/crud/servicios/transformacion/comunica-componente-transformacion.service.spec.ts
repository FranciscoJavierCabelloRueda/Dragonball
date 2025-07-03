import { TestBed } from '@angular/core/testing';

import { ComunicaComponenteTransformacionService } from './comunica-componente-transformacion.service';

describe('ComunicaComponenteTransformacionService', () => {
  let service: ComunicaComponenteTransformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaComponenteTransformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
