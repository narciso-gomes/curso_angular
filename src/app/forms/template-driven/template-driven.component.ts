import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
      rua: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  }

  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.value);
    // console.log(this.user);
  }

  consultCEP(cep, form) {
    var cep = cep.replace('/\D/g', '');

    if (cep != "") {
      
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.httpService.get(`https://viacep.com.br/ws/${cep}/json/`)
          .subscribe(dados => {
            this.popularDadosForm(dados, form)
          });
      }
    }

  }

  popularDadosForm(dados, form) {
   /*form.setValue({
      name: null,
      email: null,
      sexo: 0,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }

    })*/

    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }
}
