import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotaValuePipe } from '../pipes/quota-value.pipe';
import { DollarPipe } from '../pipes/dollar.pipe';



@NgModule({
  declarations: [QuotaValuePipe, DollarPipe],
  imports: [
    CommonModule
  ],
  exports: [QuotaValuePipe, DollarPipe]
})
export class SharedModule { }
