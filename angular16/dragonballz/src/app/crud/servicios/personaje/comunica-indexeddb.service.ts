import { Injectable } from '@angular/core';
import { DBZSchema } from '../../Interfaces/schemaDBZ';
import { IDBPDatabase, openDB } from 'idb';
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

  async cargarPersonajes(): Promise<Personaje[]> {
    const db = await this.conectaDB();
    const personajes = await db.getAll('personajes');
    return personajes;
  }

  async agregarPersonaje(personaje: Personaje): Promise<void> {
    const db = await this.conectaDB();
    await db.add('personajes', personaje);
  }

  async eliminarPersonaje(indice: number): Promise<void> {
    const db = await this.conectaDB();
    await db.delete('personajes', indice);
  }
}