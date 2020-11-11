import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web422-a4';
    onActivate(event) {
        console.log(event);
        if (event instanceof PostComponent) {
            let scrollToTop = window.setInterval(() => {          
                let pos = window.pageYOffset;
                if (pos > 0) {
                   window.scrollTo(0, pos - 50); // how far to scroll on each step
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);
        }
    }
}
