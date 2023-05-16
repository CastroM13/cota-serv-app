import { Component } from '@angular/core';
import { ModalController, RefresherCustomEvent } from '@ionic/angular';

import { QuotaType } from '../interfaces/quota-type';
import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../interfaces/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  favorites: {name: string; _id: string}[] = [];
  user?: User;
  quotas: QuotaType[] = [];
  loading: boolean = false;
  token: string | null = null;
  constructor(
    private data: DataService,
    private auth: AuthenticationService,
    private modalController: ModalController
  ) { }

  onSearchChange = (event: any) => {
    console.log(event);
  }

  refresh(ev: any) {
    this.getQuotas(ev);
  }

  getQuotas(ev?: any): void {
    this.loading = true
    this.data.getQuotas()
      .subscribe(quotas => {
        this.loading = false;
        this.quotas = quotas.map(q => ({...q, favorite: !!this.user?.favorites?.find(x => x.name === q.tag)}));
        if (ev) (ev as RefresherCustomEvent).detail.complete();
      });
  }

  ionViewWillEnter() {
    this.token = localStorage.getItem('token');
    this.auth.getUserData(this.token!)
    .subscribe((res: User) => {
      if (res) {
        this.user = res;
        localStorage.setItem('user', JSON.stringify(res))
        this.getQuotas();
      }
    });
  }

  async openUser() {
    const modal = await this.modalController.create({
    component: UserComponent,
    breakpoints: [0, 0.4],
    initialBreakpoint: 0.4,
    componentProps: { user: this.user }
    });
  
    await modal.present();
  
  }

}
