import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenudocentePage } from './menudocente.page';

const routes: Routes = [
  {
    path: '',
    component: MenudocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenudocentePageRoutingModule {}
