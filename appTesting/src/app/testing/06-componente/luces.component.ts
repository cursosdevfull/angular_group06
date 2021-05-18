import { Component } from '@angular/core';

@Component({
  selector: 'app-luces',
  template: `
    <button (click)="action()">switcher</button><br />
    <span>{{ message }}</span>
  `,
})
export class LucesComponent {
  isOn: boolean = false;

  action() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `La luz está ${this.isOn ? 'encendida' : 'apagada'}`;
  }
}
