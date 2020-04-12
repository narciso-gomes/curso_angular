import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-puro',
  templateUrl: './pipe-puro.component.html',
  styleUrls: ['./pipe-puro.component.css']
})
export class PipePuroComponent implements OnInit {

  livros = [
    'Java',
    'Php',
    'Angular',
    'Dart',
    'JavaScript',
    'Pascal',
    'Fortran'
  ];

  filtro = '';
  livro = '';
  constructor() { }

  ngOnInit(): void {
  }

  adicionarLivro(){
    this.livros.push(this.livro);
    console.log(this.livros);
  }

}
