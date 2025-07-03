import { Component } from '@angular/core';
import { Planeta } from '../../Interfaces/planeta';
import { ComunicaComponentePlanetaService } from '../../servicios/planeta/comunica-componente-planeta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-planeta',
  templateUrl: './detalle-planeta.component.html',
  styleUrls: ['./detalle-planeta.component.css']
})
export class PaginaDetallePlanetaComponent {
  public planeta: Planeta = {};

  constructor(
    private servicioComunicaPlaneta: ComunicaComponentePlanetaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    if (!isNaN(id)) {
      this.subscription = this.servicioComunicaPlaneta.planetas$.subscribe((planetas) => {
        const encontrado = planetas.find((planeta) => planeta.id == id);
        if (encontrado) {
          this.planeta = encontrado;
        } else {
          console.warn('Planeta no encontrado');
          this.volverAPrincipal();
        }
      });
    }
  }

  volverAPrincipal(): void {
    this.router.navigate(['/planetas']);
  }
}
