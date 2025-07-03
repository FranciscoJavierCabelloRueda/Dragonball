import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPlanetasComponent } from './pagina-planetas.component';

describe('PaginaPlanetasComponent', () => {
  let component: PaginaPlanetasComponent;
  let fixture: ComponentFixture<PaginaPlanetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPlanetasComponent]
    });
    fixture = TestBed.createComponent(PaginaPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
