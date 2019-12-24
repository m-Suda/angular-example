import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChromeExampleComponent } from './chrome-example/chrome-example.component';

const routes: Routes = [{ path: '', component: ChromeExampleComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AngularStateInspectorRoutingModule {}
