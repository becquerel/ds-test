import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import {SearchComponent} from './components/search.component';
import {DetailComponent} from './components/detail.component';
import {ListComponent} from './components/list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SearchComponent, DetailComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
