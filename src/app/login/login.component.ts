import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ToastController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  passwordVisible = false;
  constructor(
    private auth: AuthenticationService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  async toast(data: any) {
    const toast = await this.toastController.create(data);
    toast.present();
  }

  login() {
    const email = (document.querySelector('input[name=email]') as HTMLInputElement)?.value;
    const password = (document.querySelector('input[name=password]') as HTMLInputElement)?.value;
    if(email && password) {
      this.auth.login({
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
