import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularStateService, ExampleData } from '../../../core/services/angular-state.service';

@Component({
    selector: 'app-chrome-example',
    templateUrl: './chrome-example.component.html',
    styleUrls: ['./chrome-example.component.scss'],
})
export class ChromeExampleComponent implements OnInit {
    public dataList$: Observable<ExampleData[]>;

    constructor(private angularState: AngularStateService) {
        this.dataList$ = this.angularState.getDataList();
    }

    ngOnInit() {}
}
