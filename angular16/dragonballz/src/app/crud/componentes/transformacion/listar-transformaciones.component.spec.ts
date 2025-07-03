import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransformacionesComponent } from './listar-transformaciones.component';

describe('ListarTransformacionesComponent', () => {
  let component: ListarTransformacionesComponent;
  let fixture: ComponentFixture<ListarTransformacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListarTransformacionesComponent]
    });
    fixture = TestBed.createComponent(ListarTransformacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
