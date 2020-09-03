import { Component, OnInit } from '@angular/core';

import { Article } from '../article.model';
import { DhdArticleService } from '../dhd-article.service';

@Component({
  selector: 'app-dhd-article-list',
  templateUrl: './dhd-article-list.component.html',
  styleUrls: ['./dhd-article-list.component.scss']
})
export class DhdArticleListComponent implements OnInit {

  articlesData: Article[];

  constructor(private articleService: DhdArticleService) { }

  ngOnInit(): void {
    this.articlesData = this.articleService.getArticles();
    this.articlesData.reverse()
    console.log(this.articlesData)
  }

}
