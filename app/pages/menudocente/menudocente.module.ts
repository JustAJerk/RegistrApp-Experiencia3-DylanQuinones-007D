import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenudocentePageRoutingModule } from './menudocente-routing.module';

import { MenudocentePage } from './menudocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenudocentePageRoutingModule
  ],
  declarations: [MenudocentePage]
})
export class MenudocentePageModule {}
