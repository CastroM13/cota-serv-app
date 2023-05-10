import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { PasswordChangeComponent } from '../password-change/password-change.component';
import { ProfileDataComponent } from '../profile-data/profile-data.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  @Input('user') user?: User;

  constructor(
    private router: Router,
    public modal: ModalController,
    private modalController: ModalController,
    public auth: AuthenticationService,
    private alertController: AlertController
    ) { }

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.modal.dismiss();
    this.router.navigate(['/login'])
  }

  async changePassword() {
    const modal = await this.modalController.create({
    component: PasswordChangeComponent
    });

    await modal.present();

  }

  async changeProfileData() {
    const modal = await this.modalController.create({
    component: ProfileDataComponent,
    componentProps: {user: this.user}
    });

    await modal.present();
    
    await modal.onDidDismiss()
    .then(res => {
      console.log(res.data)
      if (res.data) {
        this.getUser().subscribe(user => this.user = user)
      }
    });

  }

  async deleteAccount() {
    const alert = await this.alertController.create({
      header: 'Excluir conta',
      mode: 'ios',
      message: 'Tem certeza que deseja excluir sua conta? Isto é uma operação <strong>IRREVERSÍVEL</strong>!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Excluir',
          cssClass: 'delete',
          handler: () => {
            this.auth.deleteAccount();
          }
        }
      ]
    });
  
    await alert.present();
  }

  getUser() {
    return this.auth.getUserData(localStorage.getItem('token')!);
  }
}
