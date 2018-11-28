import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditNotesPage } from './edit-notes';

@NgModule({
  declarations: [
    EditNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(EditNotesPage),
  ],
})
export class EditNotesPageModule {}
