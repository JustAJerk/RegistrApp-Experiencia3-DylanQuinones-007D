import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodoacademicoPage } from './periodoacademico.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodoacademicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodoacademicoPageRoutingModule {}
