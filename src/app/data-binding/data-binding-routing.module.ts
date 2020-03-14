import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { ViewChildComponent } from './view-child/view-child.component';


const routes: Routes = [
    { path: 'event-binding', component: EventBindingComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'property-binding', component: PropertyBindingComponent },
    { path: 'style-binding', component: StyleBindingComponent },
    { path: 'class-binding', component: ClassBindingComponent },
    { path: 'two-way-data-binding', component: TwoWayDataBindingComponent },
    { path: 'input-property', component: InputPropertyComponent },
    { path: 'output-property', component: OutputPropertyComponent },
    { path: 'view-child', component: ViewChildComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataBindingRouteModule { }
