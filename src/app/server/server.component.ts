import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: blue;
  }
  `]
})

export class ServerComponent {
  serverID = 18;
  serverStatus =  'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getServerStatus() {
    return this.serverStatus;
  }
}
