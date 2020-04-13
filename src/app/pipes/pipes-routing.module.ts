import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsandoPipeComponent } from './usando-pipe/usando-pipe.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { PipePuroComponent } from './pipe-puro/pipe-puro.component';
import { PipeInpuroComponent } from './pipe-inpuro/pipe-inpuro.component';
import { UsoFilterCorretoComponent } from './uso-filter-correto/uso-filter-correto.component';


const routes: Routes = [
  { path: 'usando-pipes', component: UsandoPipeComponent },
  { path: 'pipe-customizado', component: PipeCustomizadoComponent },
  { path: 'pipe-puro', component: PipePuroComponent},
  { path: 'pipe-inpuro', component: PipeInpuroComponent },
  { path: 'uso-filter-correto', component: UsoFilterCorretoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
