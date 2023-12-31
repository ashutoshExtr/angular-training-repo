import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { SubscribeService } from './Services/subscribe.service';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';


//Creating INJECTION TOKEN
export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //providers: [SubscribeService, UserService, LoggerService],
  //behind scenes UserService works as an object. {provide: UserService, useClass: UserService}
  // provide property stores an unique identifier for regiustering the class, which we also call as TOKEN.
  //this Token acts as a Key.
  // useClass tells about which class needs to be instantiated for the token

  providers: [
    SubscribeService, 
    {provide: USER_TOKEN, useClass: UserService},
    //LoggerService
    // other way to do is
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
