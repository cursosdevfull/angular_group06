import { Component } from '@angular/core';

@Component({
  selector: '.amb-notes',
  // template: '<h1>Componente de notas: {{currentDate}}</h1>',
  templateUrl: './notes.component.html',
  // styles: ['h1 {color: red}'],
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  currentDate = new Date();
}
