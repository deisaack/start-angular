import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Heroku';
  serverCreated = false;
  servers = ['Heroku', 'Digital Ocean', 'Webfaction'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 200);

  }
  ngOnInit() {
  }
  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server' + this.serverName + ' was created';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
