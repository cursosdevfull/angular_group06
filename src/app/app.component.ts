import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ambulance';
  listUsers = ['User1', 'User2', 'User3'];
  fecha = new Date();
}
