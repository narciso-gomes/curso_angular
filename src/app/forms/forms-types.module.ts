import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule }   from '@angular/forms';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';


@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule
  ]
})
export class FormsTypesModule { }
