import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTransformacionesComponent } from './pagina-transformaciones.component';

describe('PaginaTransformacionesComponent', () => {
  let component: PaginaTransformacionesComponent;
  let fixture: ComponentFixture<PaginaTransformacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaTransformacionesComponent]
    });
    fixture = TestBed.createComponent(PaginaTransformacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
