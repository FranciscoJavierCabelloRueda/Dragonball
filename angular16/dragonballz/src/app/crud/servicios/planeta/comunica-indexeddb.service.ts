import { Injectable } from '@angular/core';
import { DBZSchema } from '../../Interfaces/schemaDBZ';
import { IDBPDatabase, openDB } from 'idb';
import { Planeta } from '../../Interfaces/planeta';

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

  async cargarPlanetas(): Promise<Planeta[]> {
    const db = await this.conectaDB();
    const planetas = await db.getAll('planetas');
    return planetas;
  }

  async agregarPlaneta(personaje: Planeta): Promise<void> {
    const db = await this.conectaDB();
    await db.add('planetas', personaje);
  }

  async eliminarPlaneta(indice: number): Promise<void> {
    const db = await this.conectaDB();
    await db.delete('planetas', indice);
  }
}
