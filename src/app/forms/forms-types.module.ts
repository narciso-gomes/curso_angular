import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [TemplateDrivenComponent, FormDebugComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule, //Usado para form template-driven
    ReactiveFormsModule, //Usado para form Reactive Form
    HttpClientModule
  ]
})
export class FormsTypesModule { }
