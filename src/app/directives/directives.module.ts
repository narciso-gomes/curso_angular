import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";
import { DirectiveRoutingModule } from "./directive-routing.module";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { FormsModule } from "@angular/forms";
import { NgContentComponent } from "./ng-content/ng-content.component";
import { ChildComponentComponent } from "./ng-content/child-component/child-component.component";
import { ChildContentCompostoComponent } from "./ng-content/child-content-composto/child-content-composto.component";
import { CustomDirectivesComponent } from "./custom-directives/custom-directives.component";
import { BackgroundColorDirective } from './custom-directives/directives/background-color.directive';
import { HighlightMouseDirective } from './custom-directives/directives/highlight-mouse.directive';
import { RemoveAccentsDirective } from './custom-directives/directives/remove-accents.directive';

@NgModule({
  declarations: [
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NgContentComponent,
    ChildComponentComponent,
    ChildContentCompostoComponent,
    CustomDirectivesComponent,
    BackgroundColorDirective,
    HighlightMouseDirective,
    RemoveAccentsDirective,
  ],
  imports: [CommonModule, DirectiveRoutingModule, FormsModule],
})
export class DirectivesModule {}
