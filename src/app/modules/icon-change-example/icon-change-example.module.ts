import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { IconChangeExampleRoutingModule } from './icon-change-example-routing.module';
import { IconExampleComponent } from './icon-example/icon-example.component';

@NgModule({
    declarations: [IconExampleComponent],
    imports: [CommonModule, IconChangeExampleRoutingModule, MatIconModule, MatButtonModule],
})
export class IconChangeExampleModule {}
