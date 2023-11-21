import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Clases } from '../interfaces/interfaces';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-periodoacademico',
  templateUrl: './periodoacademico.page.html',
  styleUrls: ['./periodoacademico.page.scss'],
})
export class PeriodoacademicoPage implements OnInit {

  usuario = {
    id:0
  }

  usuarioNombre:any;

  clases:Clases[]=[]

  constructor(private userService: ApiCrudService, private router: Router, private loadingCtrl : LoadingController, private auth:AuthService) {}

  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
    this.loadClases();
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
        this.usuario={
          id: resp[0].id
        }
      }
    )
  }

  async loadClases(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();
    
    this.userService.ListarClases().subscribe(
      {
        next: resp =>{
          console.log(resp);
          loading.dismiss();

          let listString = JSON.stringify(resp);
          this.clases = JSON.parse(listString);

          this.clases = this.clases.filter(clases => clases.docente === this.usuarioNombre);

          event?.target.complete();
          console.log(this.clases);
        },
        error:err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }

  irClaseEspecifica(){
    this.router.navigateByUrl("/qrgenerado/" + this.clases[0].codigo);
  }

  irClases(){
    this.router.navigateByUrl("/crearclase/" + sessionStorage.getItem('id'));
  }

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
  }

}
