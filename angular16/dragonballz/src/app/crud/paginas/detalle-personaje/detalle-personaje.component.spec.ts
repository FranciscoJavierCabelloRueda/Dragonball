import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetallePersonajeComponent } from './detalle-personaje.component';

describe('DetallePersonajeComponent', () => {
  let component: PaginaDetallePersonajeComponent;
  let fixture: ComponentFixture<PaginaDetallePersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDetallePersonajeComponent]
    });
    fixture = TestBed.createComponent(PaginaDetallePersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
