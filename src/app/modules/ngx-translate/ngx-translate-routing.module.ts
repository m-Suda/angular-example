import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateExampleComponent } from './translate-example/translate-example.component';

const routes: Routes = [{ path: '', component: TranslateExampleComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NgxTranslateRoutingModule {}
