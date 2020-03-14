import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  interpolationValue: string = "Olá";

  constructor() { }

  ngOnInit(): void {
  }

  getValueInterpolation(){
    return this.interpolationValue;
  }

}
