import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title: string = '';
  photoToDisplay: string = '';
  fg: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reference: MatDialogRef<FormMedicComponent>
  ) {
    this.fg = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      segundo_nombre: new FormControl(
        this.data?.segundo_nombre,
        Validators.required
      ),
      apellido: new FormControl(this.data?.apellido, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      dni: new FormControl(this.data?.dni, Validators.required),
      correo: new FormControl(this.data?.correo, Validators.required),
    });

    if (!this.data) {
      this.fg.addControl('foto', new FormControl(null, Validators.required));
    } else {
      this.photoToDisplay = this.data.foto;
      this.fg.addControl('foto', new FormControl(null));
    }
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
