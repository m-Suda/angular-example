import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news.service';
import { AngularStateService } from './services/angular-state.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [NewsService, AngularStateService],
})
export class CoreModule {}
