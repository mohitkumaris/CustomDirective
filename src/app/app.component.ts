import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customdirective';
  shadowX = '12px';
  shadowY = '6px';
  appShadow = 'hotPink';

  changetheX($event) {
    this.shadowX = $event.target.value + 'px';
  }
}
