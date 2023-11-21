import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodoacademicoPageRoutingModule } from './periodoacademico-routing.module';

import { PeriodoacademicoPage } from './periodoacademico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodoacademicoPageRoutingModule
  ],
  declarations: [PeriodoacademicoPage]
})
export class PeriodoacademicoPageModule {}
