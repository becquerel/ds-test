import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './components/app.component';
import {SearchComponent} from './components/search.component';
import {DetailComponent} from './components/detail.component';
import {ListComponent} from './components/list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, SearchComponent, DetailComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
