import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planeta } from '../../Interfaces/planeta';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicaApidbzService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://dragonball-api.com/api/planets';

  async cargarPlanetas(numero: number): Promise<Planeta[]> {
    try {
      const apiUrl = `${this.apiUrl}?limit=${numero}`;

      const response = await firstValueFrom(
        this.http.get<{ items: Planeta[] }>(apiUrl).pipe(
          catchError((error) => {
            console.error('Error al traer datos de la API:', error);
            return of({ items: [] });
          })
        )
      );
      return response.items;
    } catch (error) {
      console.error('Error inesperado al conectar con la API:', error);
      return [];
    }
  }

  async filtrarPlanetasAPI(destruido: boolean): Promise<Planeta[]> {
    try {
      const apiUrl = `${this.apiUrl}?isDestroyed=${destruido}`;

      const response = await firstValueFrom(
        this.http.get<Planeta[]>(apiUrl).pipe(
          catchError((error) => {
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
