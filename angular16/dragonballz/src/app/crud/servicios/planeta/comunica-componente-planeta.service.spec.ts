import { TestBed } from '@angular/core/testing';

import { ComunicaComponentePlanetaService } from './comunica-componente-planeta.service';

describe('ComunicaComponentePlanetaService', () => {
  let service: ComunicaComponentePlanetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaComponentePlanetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
