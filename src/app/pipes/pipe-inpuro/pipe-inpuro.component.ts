import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-inpuro',
  templateUrl: './pipe-inpuro.component.html',
  styleUrls: ['./pipe-inpuro.component.css']
})
export class PipeInpuroComponent implements OnInit {

  linguagens =  [
    'PHP',
    'Java',
    'JavaScript',
    'C#',
    'C++',
    'Pascal',
    'Assembly'
  ]

  filtro;

  linguagem;

  constructor() { }

  ngOnInit(): void {
  }

  adicionarLinguagem(){
    this.linguagens.push(this.linguagem);
    console.log(this.linguagens);
  }

}
