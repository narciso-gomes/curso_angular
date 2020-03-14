import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

 // @ViewChild('campoInput', {static: true}) campoInput: HTMLElement;

 @ViewChild('campoInput', {static: true}) campoInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.campoInput.nativeElement.value)
  }

}
