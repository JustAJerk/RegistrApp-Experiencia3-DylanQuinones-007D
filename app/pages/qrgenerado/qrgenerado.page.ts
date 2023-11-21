import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';
import { QR } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-qrgenerado',
  templateUrl: './qrgenerado.page.html',
  styleUrls: ['./qrgenerado.page.scss'],
})
export class QrgeneradoPage implements OnInit {

  nombreClase:any;

  nombreClaseTitulo = ""

  docenteNombre:any

  fechaActual:any

  qr:QR ={
    nombreDocente:'',
    asignatura:'',
    fecha:''
  }

  usuario = {
    id:0,
    username: '',
    role:'',
    rut:'',
    correo:'',
    password:'', 
    isactive: false
  }

  constructor(private auth:AuthService, private router: Router, private api:ApiCrudService) { 
    const fecha = new Date();
    const opcionesDeFormato: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.fechaActual = fecha.toLocaleDateString('es-ES', opcionesDeFormato);
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = arr[2];
    return id;
  }

  numeroAleatorio(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getUsuarioById(usuarioID:number){
    this.auth.BuscarUsuarioId(usuarioID).subscribe(
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

  crearQR(){
    this.qr.nombreDocente = this.usuario.username;
    this.qr.asignatura = this.nombreClaseTitulo;
    this.qr.nombreDocente = this.docenteNombre;
    this.qr.fecha = this.fechaActual;
    this.api.CrearQR(this.qr).subscribe();
  }

  ngOnInit() {
    this.nombreClase = this.getIdFromUrl();
    this.nombreClaseTitulo = this.nombreClase.toUpperCase().replace(/_/g, ' ');
    this.docenteNombre = sessionStorage.getItem('username');
    this.crearQR(); 
  }

}
