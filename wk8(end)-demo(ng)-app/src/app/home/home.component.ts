import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  staticPost: Post;

  constructor(private data: DataManagerService){ }

  ngOnInit(){
    this.staticPost = this.data.getStaticPost()
  }
}
