import { Injectable } from '@angular/core';
import { Article } from './article';
import { Http } from '@angular/http';
import { Constants } from './constants';

@Injectable()
export class ArticleTrackerService {

  private articlePath: string;

  constructor(
    private http: Http
  ) {
    this.articlePath = Constants.BASE_PATH() + 'api/ArticleTrackers';
  }

  getAll(): Promise<Article[]> {
    return this.http.get(this.articlePath)
      .toPromise()
      .then(response => response.json() as Article[]);
  }

  trackArticle(article: Article): Promise<Article> {
      return this.http.post(this.articlePath, article)
        .toPromise()
        .then(response => response.json() as Article);
  }

}
