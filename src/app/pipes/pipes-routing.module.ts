import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsandoPipeComponent } from './usando-pipe/usando-pipe.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { PipePuroComponent } from './pipe-puro/pipe-puro.component';


const routes: Routes = [
  { path: 'usando-pipes', component: UsandoPipeComponent },
  { path: 'pipe-customizado', component: PipeCustomizadoComponent },
  { path: 'pipe-puro', component: PipePuroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
