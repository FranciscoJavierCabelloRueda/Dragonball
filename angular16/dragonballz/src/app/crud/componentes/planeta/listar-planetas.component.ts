import { Component, OnDestroy, OnInit } from '@angular/core';
import { Planeta } from '../../Interfaces/planeta';
import { ComunicaComponentePlanetaService } from '../../servicios/planeta/comunica-componente-planeta.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'listar-planetas',
  templateUrl: './listar-planetas.component.html',
  styleUrls: ['./listar-planetas.component.css']
})
export class ListarPlanetasComponent implements OnInit, OnDestroy {
  constructor(
    private servicioComunicaPlaneta: ComunicaComponentePlanetaService,
    public authService: AuthService // Inyectamos el servicio de autenticación

  ) { }

  public planetas: Planeta[] = [];

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscription = this.servicioComunicaPlaneta.planetas$.subscribe((planetas) => {
      this.planetas = planetas;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarPlaneta(indice: number): void {
    this.servicioComunicaPlaneta.eliminarPlaneta(indice);
  }
}
