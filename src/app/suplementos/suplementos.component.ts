import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.component.html',
  styleUrls: ['./suplementos.component.scss']
})
export class SuplementosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  paginaProdutos() : void {
    this.router.navigate(['/paginaProdutoSuplementos'])
  }

}
