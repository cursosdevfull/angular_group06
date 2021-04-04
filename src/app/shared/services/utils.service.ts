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
    const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      {
        disableClose: true,
        width: '320px',
      }
    );

    if (message) {
      reference.componentInstance.message = message;
    }

    return reference.afterClosed();
  }
}
