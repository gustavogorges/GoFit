import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  sideNav : boolean = false;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  openNav() : void {
    this.sideNav = true;
  }

  paginaCarrinho() : void {
    this.router.navigate(['/paginaCarrinho'])
  }

  suplementos() : void {
    this.router.navigate(['/paginaSuplementos'])
  }

  paginaPerfil() : void {
    this.router.navigate(['/paginaPerfil'])
  }

  acessorios() : void {
    this.router.navigate(['/paginaAcessorios'])
  }

  roupas() : void {
    this.router.navigate(['/paginaRoupas'])
  }

}
