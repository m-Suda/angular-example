import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { NewsDetail, NewsService } from '../../../core/services/news.service';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
    public newsList$: Observable<NewsDetail[]>;

    constructor(private news: NewsService, private router: Router) {
        this.newsList$ = this.news.getList();
    }

    ngOnInit() {}

    public openDetail(news: NewsDetail) {
        this.news.newsDetail$ = of(news);
        this.router.navigate(['news/detail']).then();
    }
}
