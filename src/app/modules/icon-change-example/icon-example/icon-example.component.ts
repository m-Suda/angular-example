import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-icon-example',
    templateUrl: './icon-example.component.html',
    styleUrls: ['./icon-example.component.scss'],
})
export class IconExampleComponent {
    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    /**
     * アイコンを追加する
     */
    public addIcon() {
        const addIcon = this.createIcon('bug_report');

        const iconDiv = this.elRef.nativeElement.querySelector('.icon-area');
        this.renderer.appendChild(iconDiv, addIcon);
    }

    /**
     * アイコンを作成する
     * @param iconName
     */
    private createIcon(iconName: string) {
        const icon = this.renderer.createElement('mat-icon');
        const text = this.renderer.createText(iconName);
        this.renderer.appendChild(icon, text);
        this.renderer.addClass(icon, 'mat-icon');
        this.renderer.addClass(icon, 'material-icons');
        return icon;
    }
}
