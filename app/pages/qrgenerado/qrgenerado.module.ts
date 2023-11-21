import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrgeneradoPageRoutingModule } from './qrgenerado-routing.module';

import { QrgeneradoPage } from './qrgenerado.page';
import { QRCodeModule} from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QrgeneradoPageRoutingModule
  ],
  declarations: [QrgeneradoPage]
})
export class QrgeneradoPageModule {}
