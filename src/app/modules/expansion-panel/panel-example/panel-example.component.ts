import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-panel-example',
    templateUrl: './panel-example.component.html',
    styleUrls: ['./panel-example.component.scss'],
})
export class PanelExampleComponent implements OnInit {
    public bisyokuden = ['ペコリーヌ', 'コッコロ', 'キャル'];

    constructor() {}

    ngOnInit() {}
}
