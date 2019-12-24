import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeTestComponent } from './pipe-test/pipe-test.component';

const routes: Routes = [{ path: '', component: PipeTestComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PipeTestRoutingModule {}
