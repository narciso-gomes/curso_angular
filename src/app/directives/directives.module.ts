import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DirectiveRoutingModule } from './directive-routing.module';



@NgModule({
  declarations: [NgSwitchComponent],
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ]
})
export class DirectivesModule { }
