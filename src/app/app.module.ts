import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { MessageComponent } from './components/message/message.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { ChatService } from "./services/chat.service";
import { ActiveListComponent } from './components/active-list/active-list.component';
import { MapComponent } from './components/map/map.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { Register2Component } from './components/register2/register2.component';
import { ActiveComponent } from './components/active/active.component';
import { RegisterDetailsComponent } from './components/register-details/register-details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FindComponent } from './components/find/find.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from 'angularfire2';
import { NotificationService } from './components/navbar/notification.service';
import { AngularFireDatabase } from 'angularfire2/database';
// import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'find', component: FindComponent },
  { path: 'users', component: UsersComponent },
  { path: 'map', component: MapComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register2', component: Register2Component },
  { path: 'login', component: LoginComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'registerdetails', component: RegisterDetailsComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'chat', canActivate: [AuthGuard], children: [
    { path: ':chatWith', component: ChatRoomComponent },
    { path: '**', redirectTo: '/chat/chat-room', pathMatch: 'full' }
  ] },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ChatRoomComponent,
    MessageComponent,
    ActiveListComponent,
    MapComponent,
    UsersComponent,
    Register2Component,
    ActiveComponent,
    RegisterDetailsComponent,
    ForgotPasswordComponent,
    FindComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
  // NgbModule,
    //NgbDate,
    HttpModule,
    FlashMessagesModule,

    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIMpYY2k6FMyXAK9T-t1677iXCUHan2h8'
    }),
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ChatService,
    ApiService,
    NotificationService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
