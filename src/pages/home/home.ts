import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { EditNotesPage } from '../edit-notes/edit-notes';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Push, PushOptions, PushObject } from '@ionic-native/push';
import { ShowNotesPage } from '../show-notes/show-notes';
import { NotesPage } from '../notes/notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

private PATH = '/anotacoes';
notes: Observable<any>;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private admobFree: AdMobFree, private push: Push, private alertCtrl: AlertController) {
      /*this.db.list(this.PATH)
       .valueChanges()
       .subscribe(datas => {
         console.log(datas);
       });*/
       this.addBanner();
       this.notes = this.getAll();
       
  }

  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  alterar(key, title, description) {
    this.navCtrl.setRoot(EditNotesPage, { key, title, description } );
  }

  deletar(key) {
    this.db.list(this.PATH).remove(key);
  }

  addBanner() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-9044922774752018/1953320746',
      isTesting: true,
      autoShow: true,
    };

    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.show()
    .then((result) => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  }

  showNote(key, title, description) {
    this.navCtrl.setRoot(ShowNotesPage, {key, title, description});
  }
  
  addNote() {
    this.navCtrl.setRoot(NotesPage);
  }

}
