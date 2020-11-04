import { Component, OnInit, Input } from '@angular/core';

// @Component is a decorator that marks a class as an Angular component
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  // (properties) in TypeScript Angular class 
  studentName: string = "Jason Bourne";
  //studentPhoto: string = "https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg";
  // @Input() decorator used to access property passed in from parent. (communication)
  @Input() photos: Array<string>;
  studentUpdated: Date = new Date();
  currentPhoto: number = 0;

  toggleImage() {
    // increment currentPhoto until we reach the end of the array, then start from 0
    this.currentPhoto = (this.currentPhoto == this.photos.length - 1) ? 0 : this.currentPhoto + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
