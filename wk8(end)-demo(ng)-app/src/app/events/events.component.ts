import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  messages: string[] = ["Hello World!"];

  constructor() { }

  ngOnInit(): void {
  }

  logClick(msg){
    console.log(msg);
    this.messages.push(msg);
  }
}
