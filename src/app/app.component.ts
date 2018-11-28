import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotesPage } from '../pages/notes/notes';
import { AboutPageModule } from '../pages/about/about.module';
import { AboutPage } from '../pages/about/about';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  @ViewChild('nav')
  navCtrl: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  myNotes() {
    this.navCtrl.setRoot(HomePage);
  }

  addNote() {
    this.navCtrl.setRoot(NotesPage);
  }

  info() {
    this.navCtrl.setRoot(AboutPage);
  }

  logout() {
    this.afAuth.auth.signOut().then( () => {
      console.log("Logout OK");
      this.navCtrl.setRoot(LoginPage);
    }).catch(() => {
      //console.log(e);
      this.navCtrl.setRoot(LoginPage);
    });
  }
}

