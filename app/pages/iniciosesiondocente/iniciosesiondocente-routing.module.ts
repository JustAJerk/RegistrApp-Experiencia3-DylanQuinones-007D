import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciosesiondocentePage } from './iniciosesiondocente.page';

const routes: Routes = [
  {
    path: '',
    component: IniciosesiondocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciosesiondocentePageRoutingModule {}
