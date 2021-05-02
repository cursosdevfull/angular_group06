import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form-history',
  templateUrl: './form-history.component.html',
  styleUrls: ['./form-history.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormHistoryComponent implements OnInit {
  title: string = '';
  fg: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reference: MatDialogRef<FormHistoryComponent>
  ) {
    this.fg = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      /*       apellido: new FormControl(this.data?.apellido, Validators.required),
      licencia: new FormControl(this.data?.licencia, [
        Validators.required,
        Validators.pattern(/^[a-z]{3}-[0-9]{3}$/g),
      ]), */
    });
  }

  ngOnInit(): void {
    this.title = this.data ? 'Edición' : 'Nuevo';
  }

  save() {
    if (this.fg.valid) {
      this.reference.close(this.fg.value);
    }
  }
}
