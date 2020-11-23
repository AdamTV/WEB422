import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attribute-class-style-bindings',
  templateUrl: './attribute-class-style-bindings.component.html',
  styleUrls: ['./attribute-class-style-bindings.component.css']
})
export class AttributeClassStyleBindingsComponent implements OnInit {

  headerSpan: number = 2;

  // class bindings should be to booleans
  showWarning: boolean = false;

  grayBackground: string = "grey";

  showBackground: boolean = false;

  // week 8: Observable:
  private subscription: any;

  constructor() { }

  ngOnInit(): void {
    var source = Observable.create(function (observer) {
  
      let i = 0;
      let interval = setInterval(() => {
    
        observer.next(i++);
    
        if (i == 5) {
          clearInterval(interval);
          observer.complete();
        }
    
      }, 1000);
    });
    
    this.subscription = source.subscribe(
      function (x) { console.log('next: %s', x); }, // "next"
      function (e) { console.log('error: %s', e); }, // "error"
      function () { console.log('complete'); } // "complete"
    );
    
    // Note: we can also "unsubscribe" to this service at any time using:
    // subscription.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
