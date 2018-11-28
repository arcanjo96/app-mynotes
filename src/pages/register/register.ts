import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registrar(email, senha) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
    .then(success => {
      this.toastCtrl.create({
        message: 'Conta criada!!',
        duration: 3000,
        position: 'bottom'
      }).present();
      this.navCtrl.pop();
    })
    .catch(error => {
      this.toastCtrl.create({
        message: 'Verifique os campos!!',
        duration: 3000,
        position: 'bottom'
      }).present();
    });
  }

}
