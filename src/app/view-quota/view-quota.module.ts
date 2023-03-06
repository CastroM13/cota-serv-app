import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewQuotaPage } from './view-quota.page';

import { IonicModule } from '@ionic/angular';

import { ViewQuotaPageRoutingModule } from './view-quota-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    ViewQuotaPageRoutingModule
  ],
  declarations: [ViewQuotaPage,]
})
export class ViewQuotaPageModule {}
