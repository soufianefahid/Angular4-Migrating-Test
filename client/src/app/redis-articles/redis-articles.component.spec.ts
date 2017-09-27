import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedisArticlesComponent } from './redis-articles.component';

describe('RedisArticlesComponent', () => {
  let component: RedisArticlesComponent;
  let fixture: ComponentFixture<RedisArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedisArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedisArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
