import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowNotesPage } from './show-notes';

@NgModule({
  declarations: [
    ShowNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowNotesPage),
  ],
})
export class ShowNotesPageModule {}
