import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NewsDetail {
    title: string;
    date: string;
    content: string;
}

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    public newsDetail$: Observable<NewsDetail>;
    private testData: NewsDetail[] = [
        { title: 'お知らせ１', date: '2019-12-20', content: '40%OFF' },
        { title: 'お知らせ２', date: '2019-12-21', content: '500円引き' },
        { title: 'お知らせ３', date: '2019-12-22', content: '２点以上で20％OFF' },
    ];

    constructor() {}

    /**
     * お知らせリストを取得
     */
    public getList() {
        return of<NewsDetail[]>(this.testData);
    }
}
