import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleTrackerService } from '../article-tracker.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articleTrackerSrvc: ArticleTrackerService) { }

  loadArticles(): void {
    this.articleTrackerSrvc.getAll()
      .then((articles) => this.articles = articles )
  }

  ngOnInit() {
    this.loadArticles();
  }

}
