import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  @Input() posts: Array<BlogPost>;

  constructor() { }

  ngOnInit(): void {
  }

}
