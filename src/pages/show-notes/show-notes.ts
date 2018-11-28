import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Note } from '../../model/Notes';
import { HomePage } from '../home/home';

/**
 * Generated class for the ShowNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-notes',
  templateUrl: 'show-notes.html',
})
export class ShowNotesPage {

  note = {} as Note;
  lista: AngularFireList<any>;
  obj: {};

  reference;
  titulo;
  descricao ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: AngularFireDatabase) {
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
    console.log('ionViewDidLoad ShowNotesPage');
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

}
