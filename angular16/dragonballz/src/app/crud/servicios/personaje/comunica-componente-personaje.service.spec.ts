import { TestBed } from '@angular/core/testing';

import { ComunicaComponentePersonajeService } from './comunica-componente-personaje.service';

describe('ComunicaComponentesService', () => {
  let service: ComunicaComponentePersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaComponentePersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
