import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDetail, NewsService } from '../../../core/services/news.service';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
    public newsDetail$: Observable<NewsDetail>;

    constructor(private news: NewsService) {
        this.newsDetail$ = this.news.newsDetail$;
    }

    ngOnInit() {}
}
