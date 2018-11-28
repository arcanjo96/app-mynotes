import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Note } from '../../model/Notes';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';


/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  note = {} as Note;
  lista: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: AngularFireDatabase, private toastCtrl: ToastController) {
    this.lista = this.fb.list('/anotacoes');
    this.note = new Note();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  salvar() {
    this.lista.push(this.note)
    .then(() => {
      this.note = new Note();
    });

    this.toastCtrl.create({
      message: "Anotação salva!",
      duration: 3000,
      position: "bottom"
    }).present();

    this.navCtrl.setRoot(HomePage);
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

}
