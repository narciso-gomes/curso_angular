import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user: any = {
    sexo: 0,
    name: '',
    email: '',
    endereco: {
      cep: '',
      numero: 0,
      complemento: '',
      rua:'',
      bairro:'',
      cidade:'',
      estado:''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form)
    console.log(this.user);
  }

}
