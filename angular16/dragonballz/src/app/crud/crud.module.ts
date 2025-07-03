import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { AgregarPersonajeComponent } from './componentes/personaje/agregar-personaje.component';
import { ListarPersonajesComponent } from './componentes/personaje/listar-personajes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarPlanetaComponent } from "./componentes/planeta/agregar-planeta.component";
import { ListarPlanetasComponent } from './componentes/planeta/listar-planetas.component';
import { AgregarTransformacionComponent } from "./componentes/transformacion/agregar-transformacion.component";
import { ListarTransformacionesComponent } from './componentes/transformacion/listar-transformaciones.component';
import { RouterModule } from '@angular/router';
import { PaginaDetallePersonajeComponent } from './paginas/detalle-personaje/detalle-personaje.component';
import { PaginaDetallePlanetaComponent } from './paginas/detalle-planeta/detalle-planeta.component';
import { PaginaDetalleTransformacionComponent } from './paginas/detalle-transformacion/detalle-transformacion.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { MensajeBienvenidaComponent } from './paginas/mensaje-bienvenida/mensaje-bienvenida.component';
import { PaginaPersonajesComponent } from './paginas/pagina-personajes/pagina-personajes.component';
import { PaginaPlanetasComponent } from './paginas/pagina-planetas/pagina-planetas.component';
import { PaginaTransformacionesComponent } from './paginas/pagina-transformaciones/pagina-transformaciones.component';
import { DetallePersonajeTransformacionesComponent } from './paginas/detalle-personaje-transformaciones/detalle-personaje-transformaciones.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    AgregarPersonajeComponent,
    ListarPersonajesComponent,
    AgregarPlanetaComponent,
    ListarPlanetasComponent,
    AgregarTransformacionComponent,
    ListarTransformacionesComponent,
    PaginaDetallePersonajeComponent,
    PaginaDetallePlanetaComponent,
    PaginaDetalleTransformacionComponent,
    LoginComponent,
    RegistroComponent,
    MensajeBienvenidaComponent,
    PaginaPersonajesComponent,
    PaginaPlanetasComponent,
    PaginaTransformacionesComponent,
    DetallePersonajeTransformacionesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    PaginaPrincipalComponent
  ]
})
export class CrudModule { }
