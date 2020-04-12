import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { UsandoPipeComponent } from './usando-pipe/usando-pipe.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { CamelCasePipe } from './pipe-customizado/camel-case.pipe';
import { PipePuroComponent } from './pipe-puro/pipe-puro.component';
import { FiltroArrayPipe } from './pipe-puro/filtro-array.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeInpuroComponent } from './pipe-inpuro/pipe-inpuro.component';
import { ArrayFilterPipe } from './pipe-inpuro/array-filter.pipe';


@NgModule({
  declarations: [UsandoPipeComponent, PipeCustomizadoComponent, CamelCasePipe, PipePuroComponent, FiltroArrayPipe, PipeInpuroComponent, ArrayFilterPipe],
  imports: [
    CommonModule,
    PipesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PipesModule { }
