import { Component, OnInit } from '@angular/core';

import { Article } from '../article.model';
import { DhdArticleService } from '../dhd-article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  //@Input() article: Article;

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: DhdArticleService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.article =  this.articleService.getSelectedArticle(id)[0];
  }

  // getArticle(){
  //   const id = this.route.snapshot.paramMap.get('id');
  //   return this.service.getSelectedArticle(id);
  // }

}
