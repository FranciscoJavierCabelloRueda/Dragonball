import { Component } from '@angular/core';
import { ComunicaComponentePlanetaService } from '../../servicios/planeta/comunica-componente-planeta.service';

@Component({
  selector: 'agregar-planeta',
  templateUrl: './agregar-planeta.component.html',
  styleUrls: ['./agregar-planeta.component.css']
})
export class AgregarPlanetaComponent {

  constructor(private servicioComunicaPlaneta: ComunicaComponentePlanetaService) { }

  public numero: number = 2;
  public destruido: boolean = true;

  async cargarPlanetasAPI(): Promise<void> {
    this.servicioComunicaPlaneta.cargarPlanetasAPI(this.numero);
  }

  async filtrarPlanetasAPI(): Promise<void> {
    this.servicioComunicaPlaneta.filtrarPlanetasAPI(this.destruido);
  }
}
