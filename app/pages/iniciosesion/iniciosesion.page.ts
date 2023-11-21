import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {
  usuario = {
    rut: '',
    contrasena: ''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

}
