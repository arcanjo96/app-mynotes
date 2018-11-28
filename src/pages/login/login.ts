import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar(email, senha) {
    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
    .then(success => {
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error => {
      this.toastCtrl.create({
        message: "Email ou senha errada!",
        duration: 3000,
        position: "bottom"
      }).present();
    });
  }

  registrar() {
    this.navCtrl.push(RegisterPage);
  }

}
