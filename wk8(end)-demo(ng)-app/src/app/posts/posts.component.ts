import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Array<Post>;
  private postsSub;

  private page; // for doing 'mock' paging - usually, paging should be provided by WEB API
  private pageSub;

  constructor( // dependent injection x3
    private data: DataManagerService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // approach 1 to get query parameter 'page'
    // this.page = this.route.snapshot.queryParams['page'];

    this.pageSub = this.route.queryParams.subscribe(params => {
    // Defaults to 0 if no query param provided.
    this.page = +params['page'] || 0;
  });

    // this.postsSub = this.data.getPosts().subscribe( data => this.posts = data );
    this.getPosts();
  }

  getPosts() {
    this.postsSub = this.data.getPosts().subscribe( data => {
      if(this.page) {
        this.posts = data.slice((this.page-1)*10, this.page*10);
      }
      else { // if query parameter 'page' is not provided, show all posts (without paging)
        this.posts = data;
      }
    });
  }

  ngOnDestroy() {
    if (this.postsSub) { this.postsSub.unsubscribe(); }
    if (this.pageSub) { this.pageSub.unsubscribe(); }
  }

  // used to navigate to the route programmatically
  goToPosts(id) {
    this.router.navigate(['/posts', id]);
  }
  
}
