import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeTestRoutingModule } from './pipe-test-routing.module';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [PipeTestComponent],
    imports: [CommonModule, PipeTestRoutingModule, SharedModule],
})
export class PipeTestModule {}
