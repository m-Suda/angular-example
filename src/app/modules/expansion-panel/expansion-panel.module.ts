import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatIconModule } from '@angular/material';
import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { PanelExampleComponent } from './panel-example/panel-example.component';

@NgModule({
    declarations: [PanelExampleComponent],
    imports: [ CommonModule, ExpansionPanelRoutingModule, MatExpansionModule, MatIconModule ],
})
export class ExpansionPanelModule {}
