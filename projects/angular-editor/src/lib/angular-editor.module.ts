import {NgModule} from '@angular/core';
import {AngularEditorComponent} from './angular-editor.component';
import {AngularEditorToolbarComponent} from './angular-editor-toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import { ColorTwitterModule } from 'ngx-color/twitter';
import { ColorPickerModule } from 'ngx-color-picker';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    ColorTwitterModule,ColorPickerModule, ClickOutsideModule
  ],
  declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
  exports: [AngularEditorComponent, AngularEditorToolbarComponent]
})
export class AngularEditorModule {
}
