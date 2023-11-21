import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menualumno',
  templateUrl: './menualumno.page.html',
  styleUrls: ['./menualumno.page.scss'],
})
export class MenualumnoPage implements OnInit {

  usuarioNombre:any;
  idPerson:any;

  usuarios = {
    id:0,
    username:"",
    password:"",
    rut:"",
    role:"",
    correo:"",
    isactive:"",
  }

  isSupported = false;

  constructor(private alertController: AlertController, private router:Router, private auth:AuthService) { }

  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
    this.idPerson = sessionStorage.getItem('id');
  }
  
  cerrarSesion(){
    sessionStorage.clear();
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUserById(userID:number){
    this.auth.GetUserById(userID).subscribe(
      (resp:any)=>{   
        this.usuarios={
          id: resp[0].id,
          username: resp[0].username,
          password: resp[0].password,
          rut: resp[0].rut,
          role: resp[0].role,
          correo: resp[0].correo,
          isactive: resp[0].isactive
        }
      }
    )
  }

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
  }

}
