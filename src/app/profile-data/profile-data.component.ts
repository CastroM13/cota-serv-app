import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ModalController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent  implements OnInit {
  @Input('user') user?: User;

  constructor(private auth: AuthenticationService, public toastController: ToastController, public modal: ModalController) { }

  ngOnInit() {}

  async toast(data: any) {
    const toast = await this.toastController.create(data);
    toast.present();
  }

  updateData() {
    const name = (document.querySelector('input[name=name]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[name=email]') as HTMLInputElement)?.value;
    if (name && email) {
      this.auth.changeProfileData({name, email}).subscribe((res: any) => {
        if (res.message) {
          this.toast({
            message: res.message,
            duration: 2000,
            color: 'success',
            icon: 'checkmark-outline'
          })
          this.modal.dismiss(true);
        }
      });
    } else {
      this.toast({
        message: 'Preencha os campos!',
        duration: 2000,
        color: 'warning',
        icon: 'warning-outline'
      })
    }
  }

}
