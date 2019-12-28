import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * 複数の多言語ファイルを読み込むためのカスタムTranslateHttpLoader
 * @link: https://github.com/ngx-translate/core/issues/199#issuecomment-339084987
 */
class MultiTranslateHttpLoader implements TranslateLoader {
    constructor(
        private http: HttpClient,
        public resources: { prefix: string; suffix: string }[] = [
            {
                prefix: '/assets/language/',
                suffix: '.json',
            },
        ]
    ) {}

    public getTranslation(lang: string): Observable<object> {
        return forkJoin(
            this.resources.map(({ prefix, suffix }) => {
                return this.http.get(`${prefix}${lang}${suffix}`);
            })
        ).pipe(
            map(response => {
                return response.reduce((a, b) => {
                    return Object.assign(a, b);
                });
            })
        );
    }
}

export function createTranslateLoader(http: HttpClient) {
    // TODO: ここでアプリIDをSessionStorageから取得する想定
    const appId = 'app-02';
    console.log('Translateのインスタンス生成');
    return new MultiTranslateHttpLoader(http, [
        // 複数アプリで共通の多言語ファイル
        { prefix: '/assets/language/common/', suffix: '.json' },
        // アプリごとの多言語ファイル
        { prefix: `/assets/language/${appId}/`, suffix: '.json' },
    ]);
}
