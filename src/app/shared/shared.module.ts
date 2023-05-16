import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotaValuePipe } from '../pipes/quota-value.pipe';
import { DollarPipe } from '../pipes/dollar.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';



@NgModule({
  declarations: [QuotaValuePipe, DollarPipe, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [QuotaValuePipe, DollarPipe, OrderByPipe]
})
export class SharedModule { }
