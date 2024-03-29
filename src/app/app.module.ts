import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

//services

import {ChatService} from './providers/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
