import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Note } from '../../model/Notes';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-notes',
  templateUrl: 'edit-notes.html',
})
export class EditNotesPage {

  note = {} as Note;
  lista: AngularFireList<any>;
  obj: {};

  reference;
  titulo;
  descricao ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: AngularFireDatabase, private toastCtrl: ToastController) {

    this.lista = this.fb.list('/anotacoes');
    this.note = new Note();

    this.reference = navParams.get('key');
    this.titulo = navParams.get('title');
    this.descricao = navParams.get('description');

    console.log(this.reference);
    console.log(this.titulo);
    console.log(this.descricao);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditNotesPage');
  }

  alterar(tit, desc) {
    this.note = new Note();
    let one = this.note.title = tit;
    let two = this.note.description = desc;

    this.note = {
      title: one,
      description: two
    }



    this.fb.database.ref('/anotacoes').update(this.note);

    this.toastCtrl.create({
      message: "Anotação alterada!",
      duration: 3000,
      position: "bottom"
    }).present();

    this.navCtrl.setRoot(HomePage);
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

}
