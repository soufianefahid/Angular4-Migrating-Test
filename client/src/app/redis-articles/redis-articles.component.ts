import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-redis-articles',
  inputs: ['article'],
  templateUrl: './redis-articles.component.html',
  styleUrls: ['./redis-articles.component.css']
})
export class RedisArticlesComponent implements OnInit {

  article: Article;
  constructor(article : Article) { }

  ngOnInit() {
  }
  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }
}
