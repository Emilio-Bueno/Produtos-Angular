import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produto : Produtos[] = [];

  constructor (private ProdutosService : ProdutosService) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.ProdutosService.getProdutos().subscribe({
      next : data => this.produto = data
    });
  }
}
