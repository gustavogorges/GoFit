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
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { RoupasComponent } from './roupas/roupas.component';
import { ProdutoAcessorioComponent } from './produto-acessorio/produto-acessorio.component';
import { ProdutoRoupaComponent } from './produto-roupa/produto-roupa.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SuplementosComponent,
    ProdutoComponent,
    CarrinhoComponent,
    LoginComponent,
    PerfilComponent,
    AcessoriosComponent,
    RoupasComponent,
    ProdutoAcessorioComponent,
    ProdutoRoupaComponent,
    CadastroComponent
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
