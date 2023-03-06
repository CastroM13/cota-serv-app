import { Component, Input } from '@angular/core';
import { QuotaType } from '../interfaces/quota-type';

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.scss'],
})
export class QuotaComponent {
  @Input() quota?: QuotaType;

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
