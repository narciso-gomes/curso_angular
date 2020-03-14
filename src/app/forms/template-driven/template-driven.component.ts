import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user: any = {
    estado: 0,
    name: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form)
    console.log(this.user);
  }

}
