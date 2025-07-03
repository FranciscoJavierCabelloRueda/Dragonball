import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlanetasComponent } from './listar-planetas.component';

describe('ListarPlanetasComponent', () => {
  let component: ListarPlanetasComponent;
  let fixture: ComponentFixture<ListarPlanetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListarPlanetasComponent]
    });
    fixture = TestBed.createComponent(ListarPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
