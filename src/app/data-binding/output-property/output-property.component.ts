import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  count: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  calculateChild(evento) {
    console.log(evento)
    if (evento.operation === "+") {
      this.count++;
    } else {
      this.count--;
    }
  }

}
