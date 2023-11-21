import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioNuevo } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUsuario: UsuarioNuevo={
    username: "",
    password: "",
    rut: "",
    role: "",
    correo: "",
    isactive: true
  }
  registroForm: FormGroup;

  userdata:any;

  constructor(private alertController: AlertController, private auth:AuthService, private router: Router, private fBuilder: FormBuilder) {
    this.registroForm = this.fBuilder.group({ 
      'rut': new FormControl ("", [Validators.required, Validators.minLength(10)]),
      'username' : new FormControl ("", [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl ("", Validators.required),
      'password': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'role': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  async mostrarMensaje(){
    const alert = await this.alertController.create({
      header: 'Registro hecho con exito!',
      message: 'Su cuenta de RegistrApp ha sido creada exitosamente!',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  registrarUsuario(){
    if (this.registroForm.valid){
      this.auth.GetUserById(this.registroForm.value.username).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
          this.errorDuplicidad();
          this.registroForm.reset();
        }
        else{
          this.newUsuario.username = this.registroForm.value.username;
          this.newUsuario.password = this.registroForm.value.password;
          this.newUsuario.rut = this.registroForm.value.rut;
          this.newUsuario.role = this.registroForm.value.role;
          this.newUsuario.correo = this.registroForm.value.correo;
          this.newUsuario.isactive=true;
          this.auth.RegistroUsuario(this.newUsuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/iniciosesiondocente');
        }
      })
    }
  }

  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Fallo al registrarse..',
      message: 'El usuario '+ this.newUsuario.username + ' ya existe!',
      buttons: ['OK']
    });
    alerta.present();
  }

}
