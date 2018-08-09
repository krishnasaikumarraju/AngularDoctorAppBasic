import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ExperiencePipe} from './ExperiencePipe';
import {FeePipe} from './FeePipe';
import {NamePipe} from './NamePipe';

@NgModule({
  declarations: [
    AppComponent, ExperiencePipe, FeePipe, NamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
