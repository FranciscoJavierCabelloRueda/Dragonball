import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetallePlanetaComponent } from './detalle-planeta.component';

describe('DetallePlanetaComponent', () => {
  let component: PaginaDetallePlanetaComponent;
  let fixture: ComponentFixture<PaginaDetallePlanetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDetallePlanetaComponent]
    });
    fixture = TestBed.createComponent(PaginaDetallePlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
