import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  studentPhotos: Array<string> = ["https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d1/Matt_Damon_%28cropped%29.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
