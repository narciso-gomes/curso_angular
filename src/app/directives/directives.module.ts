import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DirectiveRoutingModule } from './directive-routing.module';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NgSwitchComponent, NgClassComponent, NgStyleComponent],
  imports: [
    CommonModule,
    DirectiveRoutingModule,
    FormsModule
  ]
})
export class DirectivesModule { }
