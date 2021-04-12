import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDriverComponent implements OnInit {
  title: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.title = this.data ? 'Edición' : 'Nuevo';
  }
}
