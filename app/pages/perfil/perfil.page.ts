import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = {
    id:0,
    username: '',
    role:'',
    rut:'',
    correo:'',
    password:'', 
    isactive: false
  }
  constructor(private authService: AuthService,
              private router: Router,
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{  
        this.usuario={
          id: resp[0].id,
          username: resp[0].username,
          rut:resp[0].rut,
          role: resp[0].role,
          password: resp[0].password,
          isactive: resp[0].isactive,
          correo: resp[0].correo,
        }
      }
    )
  }

  

}
