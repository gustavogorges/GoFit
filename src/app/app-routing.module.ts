import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuplementosComponent } from './suplementos/suplementos.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { RoupasComponent } from './roupas/roupas.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "paginaSuplementos",
    component: SuplementosComponent
  },
  {
    path: "paginaProduto",
    component: ProdutoComponent
  },
  {
    path: "paginaCarrinho",
    component: CarrinhoComponent
  },
  {
    path: "paginaPerfil",
    component: PerfilComponent
  },
  {
    path: "paginaAcessorios",
    component: AcessoriosComponent
  },
  {
    path: "paginaRoupas",
    component: RoupasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
