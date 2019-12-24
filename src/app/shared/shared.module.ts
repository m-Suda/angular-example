import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmitLongSentencePipe } from './pipes/omit-long-sentence.pipe';

@NgModule({
    declarations: [OmitLongSentencePipe],
    imports: [CommonModule],
    exports: [OmitLongSentencePipe],
})
export class SharedModule {}
