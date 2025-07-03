import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTransformacionComponent } from './agregar-transformacion.component';

describe('AgregarTransformacionComponent', () => {
  let component: AgregarTransformacionComponent;
  let fixture: ComponentFixture<AgregarTransformacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AgregarTransformacionComponent]
    });
    fixture = TestBed.createComponent(AgregarTransformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
