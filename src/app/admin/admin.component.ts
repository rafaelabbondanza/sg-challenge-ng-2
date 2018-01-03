import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Pixel } from '../pixel';
import { ArticleTrackerService } from '../article-tracker.service';
import { PixelHelper } from '../pixel-helper';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  articles: Article[];
  newArticle: Article;
  createdArticle: Article;

  constructor(private articleTrackerSrvc: ArticleTrackerService) { }

  loadArticles(): void {
    this.articleTrackerSrvc.getAll()
      .then((articles) => {
        this.articles = articles.filter((article) => !!article.Pixel);
      });
  }

  generatePixel(article: Article): void {
    this.articleTrackerSrvc.trackArticle(article)
      .then((article) => {
        this.createdArticle = article;
        this.resetNewArticle();
        this.loadArticles();
      })
  }

  getTag(px: Pixel): string {
    return PixelHelper.generateImgTag(px.Code);
  }

  resetNewArticle() {
    this.newArticle = new Article();
    this.newArticle.UserId = 1;
  }

  ngOnInit() {
    this.loadArticles();
    this.resetNewArticle();
  }

}
