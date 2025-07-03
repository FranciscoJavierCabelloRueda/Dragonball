import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlanetaComponent } from './agregar-planeta.component';

describe('AgregarPlanetaComponent', () => {
  let component: AgregarPlanetaComponent;
  let fixture: ComponentFixture<AgregarPlanetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AgregarPlanetaComponent]
    });
    fixture = TestBed.createComponent(AgregarPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
