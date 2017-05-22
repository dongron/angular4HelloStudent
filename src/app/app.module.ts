import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { GroupComponent }  from './group.component';
import { StudentComponent }  from './student.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ GroupComponent, StudentComponent ],
  bootstrap:    [ GroupComponent ]
})
export class AppModule { }
