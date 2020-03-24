import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContentComponent } from './ng-content/ng-content.component';


const routes: Routes = [
    { path: 'ngswitch', component: NgSwitchComponent },
    { path: 'ngclass', component: NgClassComponent},
    { path: 'ngstyle', component: NgStyleComponent },
    { path: 'ngcontent', component: NgContentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DirectiveRoutingModule { }
