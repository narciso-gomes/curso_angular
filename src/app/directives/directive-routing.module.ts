import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomDirectivesComponent } from "./custom-directives/custom-directives.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { NgContentComponent } from "./ng-content/ng-content.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";

const routes: Routes = [
  { path: "ngswitch", component: NgSwitchComponent },
  { path: "ngclass", component: NgClassComponent },
  { path: "ngstyle", component: NgStyleComponent },
  { path: "ngcontent", component: NgContentComponent },
  { path: "customs", component: CustomDirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveRoutingModule {}
