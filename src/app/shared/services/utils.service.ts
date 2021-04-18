import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { ExportComponent } from '../components/export/export.component';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private readonly dialog: MatDialog,
    private readonly bottomSheet: MatBottomSheet
  ) {}

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

  openSheet(content: any = null, dto: any = null) {
    const options = { content, dto };
    this.bottomSheet.open(ExportComponent, { data: options });
  }
}
