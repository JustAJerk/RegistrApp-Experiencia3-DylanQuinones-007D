import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciosesiondocentePageRoutingModule } from './iniciosesiondocente-routing.module';

import { IniciosesiondocentePage } from './iniciosesiondocente.page';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IniciosesiondocentePageRoutingModule
  ],
  declarations: [IniciosesiondocentePage]
})
export class IniciosesiondocentePageModule {}
