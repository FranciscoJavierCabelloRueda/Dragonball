import { Injectable } from '@angular/core';
import { Personaje } from '../../Interfaces/personaje';
import { BehaviorSubject } from 'rxjs';
import { ComunicaApidbzService } from './comunica-apidbz.service';
import { ComunicaApiphpService } from './comunica-apiphp.service';

@Injectable({
  providedIn: 'root'
})
export class ComunicaComponentePersonajeService {

  constructor(
    private servicioApidbz: ComunicaApidbzService,
    private servicioApiphp: ComunicaApiphpService) {
    this.cargarPersonajesApiphp();
  }

  private observaPersonajes = new BehaviorSubject<Personaje[]>([]);
  public personajes$ = this.observaPersonajes.asObservable();

  async cargarPersonajesApiphp(): Promise<void> {
    try {
      const response = await this.servicioApiphp.cargarPersonajes();
      this.observaPersonajes.next(response.data);
      console.log(response.message); // Mensaje devuelto por la API
    } catch (error) {
      console.warn('Error al cargar los personajes:', error);
    }
  }

  async agregarPersonaje(personaje: Personaje): Promise<void> {
    try {
      const response = await this.servicioApiphp.agregarPersonaje(personaje);
      console.log(response.message); // Muestra el mensaje de la API
      if (response.success) {
        console.dir(`Personaje ${personaje.name} agregado correctamente`);
      } else {
        console.log('Error: ' + response.message);
      }
      this.cargarPersonajesApiphp();
    } catch (error) {
      console.warn('Error al agregar el personaje:', personaje.name, error);
    }
  }

  async cargarPersonajesAPI(numero: number): Promise<void> { 
    try {
      const personajes = await this.servicioApidbz.cargarPersonajes(numero);
      personajes.forEach((personaje) => this.agregarPersonaje(personaje));
      this.cargarPersonajesApiphp();
    } catch (error) {
      console.warn('Error al solicitar los personajes:', error);
    }
  }

  async filtrarPersonajesAPI(numero: number, filtros: { gender: string; race: string; affiliation: string }): Promise<void> {
    try {
      const personajes = await this.servicioApidbz.filtrarPersonajesAPI(numero, filtros);
      personajes.forEach((personaje) => this.agregarPersonaje(personaje));
      this.cargarPersonajesApiphp();
    } catch (error) {
      console.warn('Error al filtrar los personajes:', error);
    }
  }

  async eliminarPersonaje(indice: number): Promise<void> {
    try {
      const response = await this.servicioApiphp.eliminarPersonaje(indice);
      if (response.success) {
        console.log(`Indice ${indice} eliminado correctamente`);
      } else {
        console.log('Error: ' + response.message);
      }
      this.cargarPersonajesApiphp();
    } catch (error) {
      console.warn('Error al eliminar el indice:', indice, error);
    }
  }

  private observaModificarPersonaje = new BehaviorSubject<Personaje>({});
  public modificarPersonaje$ = this.observaModificarPersonaje.asObservable();

  enviarModificarPersonaje(personaje: Personaje): void {
    this.observaModificarPersonaje.next(personaje);
  }
}
