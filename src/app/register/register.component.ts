import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  passwordVisible = false;

  constructor(
    private auth: AuthenticationService,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {}

  async toast(data: any) {
    const toast = await this.toastController.create(data);
    toast.present();
  }

  register() {
    const name = (document.querySelector('input[name=name]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[name=email]') as HTMLInputElement)?.value;
    const password = (document.querySelector('input[name=password]') as HTMLInputElement)?.value;
    if(name && email && password) {
      this.auth.register({
        name,
        email,
        password
      }).subscribe(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home'])
        } else {
          this.toast({
            message: 'Erro interno do servidor!',
            duration: 2000,
            color: 'warning',
            icon: 'warning-outline'
          })
        }
      }, (res: any) => this.toast({
        message: res.error.message,
        duration: 2000,
        color: 'warning',
        icon: 'warning-outline'
      }))
    } else {
      this.toast({
        message: 'Campos vazios',
        duration: 2000,
        color: 'warning',
        icon: 'warning-outline'
      })
    }
  }

  showPassword(e: any) {
    console.log(e)
  }

}
