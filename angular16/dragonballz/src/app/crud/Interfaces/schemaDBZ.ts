import { DBSchema } from 'idb';
import { Personaje } from './personaje';
import { Planeta } from './planeta';
import { Transformacion } from './transformacion';

export interface DBZSchema extends DBSchema {
  personajes: {
    key: number; // Clave primaria
    value: Personaje; // Datos almacenados
  };
  planetas: {
    key: number; // Clave primaria
    value: Planeta; // Datos almacenados
  };
  transformaciones: {
    key: number; // Clave primaria
    value: Transformacion; // Datos almacenados
  };
}
