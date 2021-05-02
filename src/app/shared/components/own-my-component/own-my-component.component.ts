import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'amb-own-my-component',
  templateUrl: './own-my-component.component.html',
  styleUrls: ['./own-my-component.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OwnMyComponentComponent),
      multi: true,
    },
  ],
})
export class OwnMyComponentComponent implements OnInit {
  value: string = '';

  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() {}

  writeValue(value: string) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  ngOnInit(): void {}

  capture(value: string) {
    this.value = value;
    this.onChange(this.value);
    this.onTouch();
  }
}
