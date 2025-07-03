import { Injectable } from '@angular/core';
import { DBZSchema } from '../../Interfaces/schemaDBZ';
import { IDBPDatabase, openDB } from 'idb';
import { Transformacion } from '../../Interfaces/transformacion';
import { Personaje } from '../../Interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class ComunicaIndexedDBService {

  constructor() { }

  async conectaDB(): Promise<IDBPDatabase<DBZSchema>> {
    const db = await openDB<DBZSchema>('dbzDB', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('personajes')) {
          db.createObjectStore('personajes', { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains('planetas')) {
          db.createObjectStore('planetas', { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains('transformaciones')) {
          db.createObjectStore('transformaciones', { keyPath: 'id', autoIncrement: true });
        }
      }
    });
    return db;
  }

  async cargarTransformaciones(): Promise<Transformacion[]> {
    const db = await this.conectaDB();
    const transformaciones = await db.getAll('transformaciones');
    return transformaciones;
  }

  async agregarTransformacion(transformacion: Transformacion): Promise<void> {
    const db = await this.conectaDB();
    const existente = await db.get('transformaciones', transformacion.id!);
    if (!existente) {
        await db.add('transformaciones', transformacion);
    }
  }

  async filtrarTransformacionesIDB(personaje: string): Promise<Transformacion[]> {
    const db = await this.conectaDB();
    const transformaciones = await db.getAll('transformaciones');
    return transformaciones.filter((t) => t.name?.startsWith(personaje) ?? false);
  }

  async eliminarTransformacion(indice: number): Promise<void> {
    const db = await this.conectaDB();
    await db.delete('transformaciones', indice);
  }
}
