import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { QuotaType } from '../interfaces/quota-type';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quotas: QuotaType[] = [];
  loading: boolean = false;
  constructor(private data: DataService) { }

  onSearchChange = (event: any) => {
    console.log(event);
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getQuotas(): void {
    this.loading = true
    this.data.getQuotas()
      .subscribe(quotas => {
        this.loading = false;
        this.quotas = quotas;
      });
  }

  ionViewWillEnter() {
    this.getQuotas();
  }

}
