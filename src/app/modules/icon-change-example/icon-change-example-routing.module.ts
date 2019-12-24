import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconExampleComponent } from './icon-example/icon-example.component';

const routes: Routes = [{ path: '', component: IconExampleComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IconChangeExampleRoutingModule {}
