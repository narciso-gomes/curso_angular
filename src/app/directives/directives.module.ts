import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DirectiveRoutingModule } from './directive-routing.module';
import { NgClassComponent } from './ng-class/ng-class.component';



@NgModule({
  declarations: [NgSwitchComponent, NgClassComponent],
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ]
})
export class DirectivesModule { }
