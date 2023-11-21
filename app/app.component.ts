import { Component } from '@angular/core';

interface Componente{
  name: string;
  redirectTo: string;
  icon: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      name: 'Inicio',
      redirectTo: '/inicio',
      icon: 'home'
    },
    {
      name: 'Informacion',
      redirectTo: '/info',
      icon: 'chatbox'
    },
    {
      name: 'Iniciar Sesion',
      redirectTo: '/iniciosesiondocente',
      icon: 'person'
    },
    {
      name: 'Registrarse',
      redirectTo: '/registro',
      icon: 'body'
    }
  ]
}
