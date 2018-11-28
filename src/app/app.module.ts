import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'firebase/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { environment } from './environment/environment';
import { RegisterPageModule } from '../pages/register/register.module';
import { LoginPageModule } from '../pages/login/login.module';
import { NotesPageModule } from '../pages/notes/notes.module';
import { EditNotesPageModule } from '../pages/edit-notes/edit-notes.module';

import { AdMobFree } from '@ionic-native/admob-free';
import { Push } from '@ionic-native/push'
import { AboutPageModule } from '../pages/about/about.module';
import { ShowNotesPageModule } from '../pages/show-notes/show-notes.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RegisterPageModule,
    LoginPageModule,
    NotesPageModule,
    EditNotesPageModule,
    AboutPageModule,
    ShowNotesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
