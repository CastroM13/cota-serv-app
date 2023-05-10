import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../interfaces/user-login';
import { UserRegister } from '../interfaces/user-register';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  public login(credentials: UserLogin): Observable<any> {
    return this.http.post('http://localhost:3000/user/login', credentials);
  }

  public register(credentials: UserRegister): Observable<any> {
    return this.http.post('http://localhost:3000/user', credentials);
  }

  public getUserData(token: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/user?token=' + token);
  }

  public changePassword(password: string) {
    return this.http.patch('http://localhost:3000/user/password', {
      password,
    },
    {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    });
  }

  public changeProfileData(changes: User) {
    return this.http.patch('http://localhost:3000/user', {
      ...changes
    },
    {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    });
  }

  public deleteAccount() {
    return this.http.delete('http://localhost:3000/user/password',
    {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    });
  }
}
