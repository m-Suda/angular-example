import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ExampleData {
    name: string;
    guild: string;
    height: number;
    birthday: string;
    UBName: string;
}

@Injectable({
    providedIn: 'root',
})
export class AngularStateService {
    private exampleDataList$: Observable<ExampleData[]>;

    constructor() {}

    /**
     * サーバーからデータを取得したと仮定して
     */
    public getDataList() {
        this.exampleDataList$ = of([
            {
                name: 'クリスティーナ',
                guild: '王宮騎士団',
                height: 165,
                birthday: '2月7日',
                UBName: 'ナンバーズアヴァロン',
            },
            {
                name: 'ジュン',
                guild: '王宮騎士団',
                height: 171,
                birthday: '10月25日',
                UBName: 'インフェルノシールド',
            },
            {
                name: 'トモ',
                guild: '王宮騎士団',
                height: 149,
                birthday: '8月11日',
                UBName: 'ミクマ流奥義・阿修羅',
            },
            {
                name: 'マツリ',
                guild: '王宮騎士団',
                height: 146,
                birthday: '11月25日',
                UBName: 'タイガーヒーローボンバー',
            },
        ]);
        return this.exampleDataList$;
    }
}
