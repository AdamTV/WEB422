import { Component, OnInit } from '@angular/core';

// @Component is a decorator that marks a class as an Angular component
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  // properties in TypeScript Angular class 
  studentName: string = "Jason Bourne";
  studentPhoto: string = "https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg";
  studentUpdated: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
