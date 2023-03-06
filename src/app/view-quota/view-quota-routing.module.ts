import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewQuotaPage } from './view-quota.page';

const routes: Routes = [
  {
    path: '',
    component: ViewQuotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewQuotaPageRoutingModule {}
