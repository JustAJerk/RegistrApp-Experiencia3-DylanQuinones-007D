import { Component, OnInit } from '@angular/core';
import { ClaseEspecifica} from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearclase',
  templateUrl: './crearclase.page.html',
  styleUrls: ['./crearclase.page.scss'],
})
export class CrearclasePage implements OnInit {

  usuarioNombre:any;

  nombreClase = ""

  newClase:ClaseEspecifica = {
    nombre:"",
    codigo:"",
    docente:"",
    anio:0,
    semestre:"",
    horasSemanales:0
  }

  constructor(private apicrudService:ApiCrudService, private router:Router) { }

  crearClase(){
    this.nombreClase = this.newClase.nombre.toLowerCase().replace(/ /g, '_');
    this.newClase.codigo = this.nombreClase;
    this.newClase.docente = this.usuarioNombre;
    this.apicrudService.CrearClase(this.newClase).subscribe();
  }

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
  }

}
