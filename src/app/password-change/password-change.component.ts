import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent  implements OnInit {
  passwordVisible = [false, false, false]
  constructor(private auth: AuthenticationService, public toastController: ToastController) { }

  ngOnInit() {}

  async toast(data: any) {
    const toast = await this.toastController.create(data);
    toast.present();
  }


  changePassword() {
    const newP = (document.querySelector('#password-new') as HTMLInputElement)?.value;
    const newConfirm = (document.querySelector('#password-new-confirm') as HTMLInputElement)?.value;
    if (newP && newConfirm) {
      if (newP === newConfirm) {
        this.auth.changePassword(newConfirm).subscribe(res => {
          console.log(res)
        });
      } else {
        this.toast({
          message: 'Senhas não correspondem!',
          duration: 2000,
          color: 'warning',
          icon: 'warning-outline'
        })
      }
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
