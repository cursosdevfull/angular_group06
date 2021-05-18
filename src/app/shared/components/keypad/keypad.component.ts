import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyPadButton } from '../../interfaces/keybutton.interface';

export const ACTION_NEW = 'NEW';
export const ACTION_EXPORT = 'EXPORT';

@Component({
  selector: 'amb-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css'],
})
export class KeypadComponent implements OnInit {
  @Input() keypadButtons: KeyPadButton[] = [];
  @Output() clickButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  action(act: string) {
    this.clickButton.emit(act);
  }
}
