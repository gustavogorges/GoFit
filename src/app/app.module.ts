import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import { NavComponent } from './nav/nav.component';
import {InputTextModule} from 'primeng/inputtext';
import { SuplementosComponent } from './suplementos/suplementos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SuplementosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
