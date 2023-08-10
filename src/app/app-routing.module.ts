import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuplementosComponent } from './suplementos/suplementos.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {
    path: "",
    component: SuplementosComponent
  },
  {
    path: "paginaProduto",
    component: ProdutoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
