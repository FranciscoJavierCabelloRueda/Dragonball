import { Component } from '@angular/core';
import { Transformacion } from '../../Interfaces/transformacion';
import { ComunicaComponenteTransformacionService } from '../../servicios/transformacion/comunica-componente-transformacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-transformacion',
  templateUrl: './detalle-transformacion.component.html',
  styleUrls: ['./detalle-transformacion.component.css']
})
export class PaginaDetalleTransformacionComponent {
  public transformacion: Transformacion = {};

  constructor(
    private servicioComunicaTransformacion: ComunicaComponenteTransformacionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    if (!isNaN(id)) {
      this.subscription = this.servicioComunicaTransformacion.transformaciones$.subscribe((transformaciones) => {
        const encontrado = transformaciones.find((transformacion) => transformacion.id == id);
        if (encontrado) {
          this.transformacion = encontrado;
        } else {
          console.warn('Planeta no encontrado');
          this.volverAPrincipal();
        }
      });
    }
  }

  volverAPrincipal(): void {
    this.router.navigate(['/transformaciones']);
  }
}
