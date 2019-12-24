import { Pipe, PipeTransform } from '@angular/core';

/**
 * 長文を省略し別の文字に置き換える。
 * @param lengthToDisplay 表示する文字の長さ
 * @param replaceStr 置き換える文字
 *【使用例】
 *   {{'あいうえお' | omitLongSentence 3:'…'}} => 'あいう…'
 */
@Pipe({
    name: 'omitLongSentence',
})
export class OmitLongSentencePipe implements PipeTransform {
    transform(value: string, lengthToDisplay: number, replaceStr = ''): string {
        return `${value.slice(0, lengthToDisplay)}${replaceStr}`;
    }
}
