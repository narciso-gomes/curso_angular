import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorOnKeyUpEvent: string;
  valorOnKeyUpEnter: string;
  valorBlurEvent: string;

  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  alertOla() {
    alert('Olá este é um eventBinding');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorOnKeyUpEvent = (<HTMLInputElement>event.target).value;
  }

  onKeyUpEnter(value) {
    this.valorOnKeyUpEnter = value;
  }

  blurEvent(value) {
    this.valorBlurEvent = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
