import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import { NavComponent } from './nav/nav.component';
import {InputTextModule} from 'primeng/inputtext';
import { SuplementosComponent } from './suplementos/suplementos.component';
import { ProdutoComponent } from './produto/produto.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SuplementosComponent,
    ProdutoComponent,
    CarrinhoComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
