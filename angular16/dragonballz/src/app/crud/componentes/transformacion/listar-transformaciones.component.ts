import { Component } from '@angular/core';
import { ComunicaComponenteTransformacionService } from '../../servicios/transformacion/comunica-componente-transformacion.service';
import { Transformacion } from '../../Interfaces/transformacion';
import { Subscription } from 'rxjs';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'listar-transformaciones',
  templateUrl: './listar-transformaciones.component.html',
  styleUrls: ['./listar-transformaciones.component.css']
})
export class ListarTransformacionesComponent {
  constructor(
    private servicioComunicaTransformacion: ComunicaComponenteTransformacionService,
    public authService: AuthService // Inyectamos el servicio de autenticación

  ) { }

  public transformaciones: Transformacion[] = [];

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscription = this.servicioComunicaTransformacion.transformaciones$.subscribe((transformaciones) => {
      this.transformaciones = transformaciones;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarTransformacion(indice: number): void {
    this.servicioComunicaTransformacion.eliminarTransformacion(indice);
  }
}
