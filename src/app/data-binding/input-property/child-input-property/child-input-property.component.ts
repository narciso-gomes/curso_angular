import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-input-property',
  templateUrl: './child-input-property.component.html',
  styleUrls: ['./child-input-property.component.css']
})
export class ChildInputPropertyComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
