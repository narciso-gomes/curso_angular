import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uso-filter-correto',
  templateUrl: './uso-filter-correto.component.html',
  styleUrls: ['./uso-filter-correto.component.css']
})
export class UsoFilterCorretoComponent implements OnInit {

  listaNomes = [
    'Narciso Gomes',
    'Junior dos Santos Gomes',
    'Amaral Figueira Junior',
    'Armando Nunes',
    'Daniela Suiara',
    'Ana Beatriz',
    'Byanca Silva',
  ];

  nome: string;

  nomeFiltro: string;

  constructor() { }

  ngOnInit(): void {
  }

  adicionarNome() {
    this.listaNomes.push(this.nome);
    this.nome = '';
  }

  listaNomesFiltrados() {
    if (this.listaNomes.length === 0 || this.nomeFiltro === undefined || this.nomeFiltro.trim() === '') {
      return this.listaNomes;
    }

    let listaNomesFiltrados = this.listaNomes.filter((v) => {
      if (v.toLowerCase().indexOf(this.nomeFiltro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });

    return listaNomesFiltrados;
  }

}
