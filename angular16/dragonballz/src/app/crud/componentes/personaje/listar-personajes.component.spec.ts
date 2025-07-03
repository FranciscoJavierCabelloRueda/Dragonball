import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonajeComponent } from './listar-personajes.component';

describe('ListarPersonajeComponent', () => {
  let component: ListarPersonajeComponent;
  let fixture: ComponentFixture<ListarPersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPersonajeComponent]
    });
    fixture = TestBed.createComponent(ListarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
