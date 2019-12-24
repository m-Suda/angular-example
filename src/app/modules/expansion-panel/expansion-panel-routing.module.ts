import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelExampleComponent } from './panel-example/panel-example.component';

const routes: Routes = [{ path: '', component: PanelExampleComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpansionPanelRoutingModule {}
