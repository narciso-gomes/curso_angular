import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { UsandoPipeComponent } from './usando-pipe/usando-pipe.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { CamelCasePipe } from './pipe-customizado/camel-case.pipe';


@NgModule({
  declarations: [UsandoPipeComponent, PipeCustomizadoComponent, CamelCasePipe],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
