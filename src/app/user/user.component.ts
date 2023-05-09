import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PasswordChangeComponent } from '../password-change/password-change.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  @Input('user') user?: User;

  constructor(private router: Router, public modal: ModalController, private modalController: ModalController) { }

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.modal.dismiss();
    this.router.navigate(['/login'])
  }

  async changePassword() {
    const modal = await this.modalController.create({
    component: PasswordChangeComponent,
    componentProps: { value: 123 }
    });

    await modal.present();

  }
}
