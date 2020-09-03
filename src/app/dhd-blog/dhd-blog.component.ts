import { Component, OnInit } from '@angular/core';

import { DhdArticleService } from './dhd-article.service'
import { Article } from './article.model';

@Component({
  selector: 'app-dhd-blog',
  templateUrl: './dhd-blog.component.html',
  styleUrls: ['./dhd-blog.component.scss'],
  providers: [DhdArticleService]
})
export class DhdBlogComponent implements OnInit {

  articleSelected: Article;

  constructor(private articleService: DhdArticleService) { }

  ngOnInit(): void {
    this.articleService.articleSelected.subscribe(
      (article: Article) => {
        this.articleSelected = article;
        console.log(article)
      }
    );
  }

}
