import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './crud/paginas/pagina-principal/pagina-principal.component';
import { PaginaDetallePersonajeComponent } from './crud/paginas/detalle-personaje/detalle-personaje.component';
import { PaginaDetallePlanetaComponent } from './crud/paginas/detalle-planeta/detalle-planeta.component';
import { PaginaDetalleTransformacionComponent } from './crud/paginas/detalle-transformacion/detalle-transformacion.component';
import { LoginComponent } from './crud/paginas/login/login.component';
import { RegistroComponent } from './crud/paginas/registro/registro.component';

// Importamos los componentes de los CRUDs
import { PaginaPersonajesComponent } from './crud/paginas/pagina-personajes/pagina-personajes.component';
import { PaginaPlanetasComponent } from './crud/paginas/pagina-planetas/pagina-planetas.component';
import { PaginaTransformacionesComponent } from './crud/paginas/pagina-transformaciones/pagina-transformaciones.component';
import { DetallePersonajeTransformacionesComponent } from './crud/paginas/detalle-personaje-transformaciones/detalle-personaje-transformaciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PaginaPrincipalComponent },
  { path: 'personajes', component: PaginaPersonajesComponent },
  { path: 'planetas', component: PaginaPlanetasComponent },
  { path: 'transformaciones', component: PaginaTransformacionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'personaje/:id', component: PaginaDetallePersonajeComponent },
  { path: 'personaje/:name/transformaciones', component: DetallePersonajeTransformacionesComponent, }, // Transformaciones
  { path: 'planeta/:id', component: PaginaDetallePlanetaComponent },
  { path: 'transformacion/:id', component: PaginaDetalleTransformacionComponent },
  { path: '**', redirectTo: '/principal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
