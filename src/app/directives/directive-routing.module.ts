import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';


const routes: Routes = [
    { path: 'ngswitch', component: NgSwitchComponent },
    { path: 'ngclass', component: NgClassComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DirectiveRoutingModule { }
