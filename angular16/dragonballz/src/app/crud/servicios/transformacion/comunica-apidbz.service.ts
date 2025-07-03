import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transformacion } from '../../Interfaces/transformacion';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicaApidbzService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://dragonball-api.com/api/transformations'; // Reemplaza con la URL real de tu API

  // Método para obtener datos de la API
  async cargarTransformaciones(): Promise<Transformacion[]> {
    try {
      const response = await firstValueFrom(
        this.http.get<Transformacion[]>(this.apiUrl).pipe(
          catchError((error: any) => {
            console.error('Error al traer datos de la API:', error);
            return of([]); 
          })
        )
      );
      return response; 
    } catch (error) {
      console.error('Error inesperado al conectar con la API:', error);
      return [];
    }
  }
}
