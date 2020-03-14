import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-property-child',
  templateUrl: './output-property-child.component.html',
  styleUrls: ['./output-property-child.component.css']
})
export class OutputPropertyChildComponent implements OnInit {

  @Output() calculate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
