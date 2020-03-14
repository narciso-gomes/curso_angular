import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms-types.module').then(m => m.FormsTypesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
