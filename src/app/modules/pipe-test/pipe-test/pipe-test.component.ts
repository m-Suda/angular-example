import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe-test',
    templateUrl: './pipe-test.component.html',
    styleUrls: ['./pipe-test.component.scss'],
})
export class PipeTestComponent implements OnInit {
    public text =
        'わらわこそ夜を統べる者、イリヤ・オーンスタイン！こたびの働きを評価し、お主を我が眷属としてやろう！';

    constructor() {}

    ngOnInit() {}
}
