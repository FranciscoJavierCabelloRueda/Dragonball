import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonajeTransformacionesComponent } from './detalle-personaje-transformaciones.component';

describe('DetallePersonajeTransformacionesComponent', () => {
  let component: DetallePersonajeTransformacionesComponent;
  let fixture: ComponentFixture<DetallePersonajeTransformacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePersonajeTransformacionesComponent]
    });
    fixture = TestBed.createComponent(DetallePersonajeTransformacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
