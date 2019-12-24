import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'pipe-test',
        loadChildren: () =>
            import('./modules/pipe-test/pipe-test.module').then(m => m.PipeTestModule),
    },
    {
        path: 'news',
        loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule),
    },
    {
        path: 'panel',
        loadChildren: () =>
            import('./modules/expansion-panel/expansion-panel.module').then(
                m => m.ExpansionPanelModule
            ),
    },
    {
        path: 'icon-change',
        loadChildren: () =>
            import('./modules/icon-change-example/icon-change-example.module').then(
                m => m.IconChangeExampleModule
            ),
    },
    {
        path: 'angular-state',
        loadChildren: () =>
            import('./modules/angular-state-inspector/angular-state-inspector.module').then(
                m => m.AngularStateInspectorModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
