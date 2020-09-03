import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../article.model';
import { DhdArticleService } from '../../dhd-article.service';

@Component({
  selector: 'app-dhd-article',
  templateUrl: './dhd-article.component.html',
  styleUrls: ['./dhd-article.component.scss']
})
export class DhdArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(private articleService: DhdArticleService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.articleService.articleSelected.emit(this.article)
  }

}
