import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'iniciosesiondocente',
    loadChildren: () => import('./pages/iniciosesiondocente/iniciosesiondocente.module').then( m => m.IniciosesiondocentePageModule)
  },
  {
    path: 'menualumno/:id',
    loadChildren: () => import('./pages/menualumno/menualumno.module').then( m => m.MenualumnoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'menudocente/:id',
    loadChildren: () => import('./pages/menudocente/menudocente.module').then( m => m.MenudocentePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qrgenerado/:codigo',
    loadChildren: () => import('./pages/qrgenerado/qrgenerado.module').then( m => m.QrgeneradoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'periodoacademico/:id',
    loadChildren: () => import('./pages/periodoacademico/periodoacademico.module').then( m => m.PeriodoacademicoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'crearclase/:id',
    loadChildren: () => import('./pages/crearclase/crearclase.module').then( m => m.CrearclasePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfilactualizar/:id',
    loadChildren: () => import('./pages/perfilactualizar/perfilactualizar.module').then( m => m.PerfilactualizarPageModule),
    canActivate: [AutorizadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
