import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.component.html',
  styleUrls: ['./roupas.component.scss']
})
export class RoupasComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  paginaProduto() : void {
    this.router.navigate(['/paginaProdutoRoupas'])
  }

}
