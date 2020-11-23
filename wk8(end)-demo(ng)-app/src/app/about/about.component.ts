import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  staticPost: Post;

  constructor(private data: DataManagerService){ }

  ngOnInit(){
    this.staticPost = this.data.getStaticPost()
  }

}
