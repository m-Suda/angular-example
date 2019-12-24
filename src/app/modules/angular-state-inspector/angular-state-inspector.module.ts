import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularStateInspectorRoutingModule } from './angular-state-inspector-routing.module';
import { ChromeExampleComponent } from './chrome-example/chrome-example.component';

@NgModule({
    declarations: [ChromeExampleComponent],
    imports: [CommonModule, AngularStateInspectorRoutingModule],
})
export class AngularStateInspectorModule {}
