import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPersonajesComponent } from './pagina-personajes.component';

describe('PaginaPersonajesComponent', () => {
  let component: PaginaPersonajesComponent;
  let fixture: ComponentFixture<PaginaPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPersonajesComponent]
    });
    fixture = TestBed.createComponent(PaginaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
