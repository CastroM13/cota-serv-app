import { Component, Input, OnInit } from '@angular/core';
import { QuotaType } from '../interfaces/quota-type';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.scss'],
})
export class QuotaComponent implements OnInit {
  @Input() quota?: QuotaType;

  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  async favorite(event: any) {
    event.stopPropagation();
    if (this.quota!.favorite) {
      this.quota!.favorite = false;
      const user = await JSON.parse( localStorage.getItem('user') || '{favorites:[]}') as User;
      this.authService.deleteFavorite(user.favorites!.find((x: any) => x.name === this.quota!.tag)!._id).subscribe(res => console.log(res))
    } else {
      this.quota!.favorite = true;
      this.authService.postFavorite(this.quota!.tag).subscribe(res => console.log(res));
    }
  }
}
