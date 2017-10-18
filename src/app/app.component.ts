import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = '';
  obj = {
    name: 'isaac',
    age: 23,
  };
  arr = ['abc', 'def', 'ghi'];
  isTrue = true;
  myName = 'De';
}
