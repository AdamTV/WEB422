import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogPosts: Array<BlogPost> = blogData;
  id: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;      
    });
   }

  ngOnInit(): void {
  }

}
