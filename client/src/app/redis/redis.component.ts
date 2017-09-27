import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
@Component({
  selector: 'app-redis',
  templateUrl: './redis.component.html',
  styleUrls: ['./redis.component.css']
})
export class RedisComponent implements OnInit {
  articles : Array<Article>;
  constructor() { 
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ]
  }

  ngOnInit() {
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  }

}
