import { Injectable } from '@angular/core';
import { Planeta } from '../../Interfaces/planeta';
import { BehaviorSubject } from 'rxjs';
import { ComunicaApidbzService } from './comunica-apidbz.service';
import { ComunicaApiphpService } from './comunica-apiphp.service';

@Injectable({
  providedIn: 'root'
})
export class ComunicaComponentePlanetaService {

  constructor(
    private servicioApidbz: ComunicaApidbzService,
    private servicioApiphp: ComunicaApiphpService) {
    this.cargarPlanetasApiphp();
  }

  private observaPlanetas = new BehaviorSubject<Planeta[]>([]);
  public planetas$ = this.observaPlanetas.asObservable();

  async cargarPlanetasApiphp(): Promise<void> {
    try {
      const response = await this.servicioApiphp.cargarPlanetas();
      this.observaPlanetas.next(response.data);
      console.log(response.message); // Mensaje devuelto por la API
    } catch (error) {
      console.warn('Error al cargar los planetas:', error);
    }
  }

  async agregarPlaneta(planeta: Planeta): Promise<void> {
    try {
      const response = await this.servicioApiphp.agregarPlaneta(planeta);
      console.log(response.message); // Muestra el mensaje de la API
      if (response.success) {
        console.dir(`Planeta ${planeta.name} agregado correctamente`);
      } else {
        console.log('Error: ' + response.message);
      }
      this.cargarPlanetasApiphp();
    } catch (error) {
      console.warn('Error al agregar el planeta:', planeta, error);
    }
  }

  async cargarPlanetasAPI(numero: number): Promise<void> {
    try {
      const planetas = await this.servicioApidbz.cargarPlanetas(numero);
      console.log(planetas);
      planetas.forEach((planeta) => this.agregarPlaneta(planeta));
      this.cargarPlanetasApiphp();
    } catch (error) {
      console.warn('Error al solicitar los planetas:', error);
    }
  }

  async filtrarPlanetasAPI(destruido: boolean): Promise<void> {
    try {
      const planetas = await this.servicioApidbz.filtrarPlanetasAPI(destruido);
      planetas.forEach((planeta) => this.agregarPlaneta(planeta));
      this.cargarPlanetasApiphp();
    } catch (error) {
      console.warn('Error al filtrar los planetas:', error);
    }
  }

  async eliminarPlaneta(indice: number): Promise<void> {
    try {
      const response = await this.servicioApiphp.eliminarPlaneta(indice);
      if (response.success) {
        console.log(`Indice ${indice} eliminado correctamente`);
      } else {
        console.log('Error: ' + response.message);
      }
      this.cargarPlanetasApiphp();
    } catch (error) {
      console.warn('Error al eliminar el planeta:', indice, error);
    }
  }
}
