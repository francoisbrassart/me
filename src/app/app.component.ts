import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'me';
  options: AnimationOptions = {
    path: 'assets/animations/under_construction.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
