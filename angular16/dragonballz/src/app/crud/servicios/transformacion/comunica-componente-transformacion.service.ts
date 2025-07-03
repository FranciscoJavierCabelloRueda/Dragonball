import { Injectable } from '@angular/core';
import { Transformacion } from '../../Interfaces/transformacion';
import { ComunicaIndexedDBService } from './comunica-indexeddb.service';
import { ComunicaApidbzService } from './comunica-apidbz.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicaComponenteTransformacionService {

  constructor(
    private servicioComunicaIndexedDB: ComunicaIndexedDBService,
    private servicioApidbz: ComunicaApidbzService) {
    // this.cargarTransformacionesIDB();  
  }

  private observaTransformaciones = new BehaviorSubject<Transformacion[]>([]);
  public transformaciones$ = this.observaTransformaciones.asObservable();

  private observaPersonajes = new BehaviorSubject<string[]>([]);
  public personajes$ = this.observaPersonajes.asObservable();

  private personaje!: string;

  async cargarTransformacionesIDB(personaje: string): Promise<void> {
    try {
      const transformaciones = await this.servicioComunicaIndexedDB.cargarTransformaciones();
      this.observaTransformaciones.next(transformaciones);
    } catch (error) {
      console.warn('Error al cargar las transformaciones:', error);
    }
  }

  async agregarTransformacion(transformacion: Transformacion): Promise<void> {
    try {
      await this.servicioComunicaIndexedDB.agregarTransformacion(transformacion);
    } catch (error) {
      console.warn('Error al agregar la transformación:', transformacion, error);
    }
  }

  async cargarPersonajesTransformacionesAPI(): Promise<void> {
    try {
      const transformaciones = await this.servicioApidbz.cargarTransformaciones();
      transformaciones.forEach((transformacion) => this.agregarTransformacion(transformacion));

      const personajes = Array.from(new Set(transformaciones.map(t => t.name?.split(' ')[0] ?? '')));
      this.observaPersonajes.next(personajes.filter((name) => name));
    } catch (error) {
      console.warn('Error al cargar transformaciones de la API:', error);
    }
  }

  async filtrarTransformacionesIDB(personaje: string): Promise<void> {
    try {
      this.personaje = personaje;
      const transformaciones = await this.servicioComunicaIndexedDB.filtrarTransformacionesIDB(personaje);
      this.observaTransformaciones.next(transformaciones);
    } catch (error) {
      console.warn('Error al filtrar transformaciones en IndexedDB:', error);
    }
  }

  async eliminarTransformacion(id: number): Promise<void> {
    try {
      await this.servicioComunicaIndexedDB.eliminarTransformacion(id);
      if (this.personaje) {
        this.filtrarTransformacionesIDB(this.personaje);
      }
    } catch (error) {
      console.warn('Error al eliminar la transformación:', error);
    }
  }
}
