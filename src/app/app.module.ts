import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DollarPipe } from './pipes/dollar.pipe';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PasswordChangeComponent,
    ProfileDataComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
