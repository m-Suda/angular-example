import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxTranslateRoutingModule } from './ngx-translate-routing.module';
import { TranslateExampleComponent } from './translate-example/translate-example.component';
import { TranslateSharedLazyModule } from '../../shared/translate-shared-lazy.module';

@NgModule({
    declarations: [TranslateExampleComponent],
    imports: [CommonModule, NgxTranslateRoutingModule, TranslateSharedLazyModule],
})
export class NgxTranslateModule {}
