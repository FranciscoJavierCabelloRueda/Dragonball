import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeBienvenidaComponent } from './mensaje-bienvenida.component';

describe('MensajeBienvenidaComponent', () => {
  let component: MensajeBienvenidaComponent;
  let fixture: ComponentFixture<MensajeBienvenidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeBienvenidaComponent]
    });
    fixture = TestBed.createComponent(MensajeBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
