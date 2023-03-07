import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewQuotaPage } from './view-quota.page';

import { IonicModule } from '@ionic/angular';

import { ViewQuotaPageRoutingModule } from './view-quota-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppModule } from '../app.module';
import { QuotaValuePipe } from '../pipes/quota-value.pipe';
import { DollarPipe } from '../pipes/dollar.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    ViewQuotaPageRoutingModule,
    SharedModule
  ],
  declarations: [ViewQuotaPage]
})
export class ViewQuotaPageModule {}
