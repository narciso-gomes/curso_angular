import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingRouteModule } from './data-binding-routing.module';
import { FormsModule } from '@angular/forms';

import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { ChildInputPropertyComponent } from './input-property/child-input-property/child-input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { OutputPropertyChildComponent } from './output-property/output-property-child/output-property-child.component';
import { ViewChildComponent } from './view-child/view-child.component';



@NgModule({
  declarations: [
    EventBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertyComponent,
    ChildInputPropertyComponent,
    OutputPropertyComponent,
    OutputPropertyChildComponent,
    ViewChildComponent
  ],

  imports: [
    CommonModule,
    DataBindingRouteModule,
    FormsModule
  ]
})
export class DataBindingModule { }
