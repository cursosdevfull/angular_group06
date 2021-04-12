import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private readonly dialog: MatDialog) {}

  confirm(message: string = ''): Observable<string> {
    const options = {
      disableClose: true,
      width: '320px',
    };
    const reference: MatDialogRef<ConfirmComponent> = this.openModal(
      ConfirmComponent,
      options
    );

    if (message) {
      reference.componentInstance.message = message;
    }

    return reference.afterClosed();
  }

  openModal(
    classComponent: any,
    options: { [s: string]: string | boolean | number | object }
  ): MatDialogRef<any> {
    return this.dialog.open(classComponent, options);
  }
}
