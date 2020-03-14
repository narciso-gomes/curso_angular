import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';


const routes: Routes = [
    { path: 'ngswitch', component: NgSwitchComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DirectiveRoutingModule { }
