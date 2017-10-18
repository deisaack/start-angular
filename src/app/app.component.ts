import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = [3, 5, 8, 4, 9];
  name = 'De isaac';
  day = new Date(1996, 7, 15);
}
