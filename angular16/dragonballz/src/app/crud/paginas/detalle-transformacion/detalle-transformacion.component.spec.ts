import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetalleTransformacionComponent } from './detalle-transformacion.component';

describe('DetalleTransformacionComponent', () => {
  let component: PaginaDetalleTransformacionComponent;
  let fixture: ComponentFixture<PaginaDetalleTransformacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDetalleTransformacionComponent]
    });
    fixture = TestBed.createComponent(PaginaDetalleTransformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
