import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { History } from '../../../domain/history.interface';
import { HistoryUseCase } from 'src/app/histories/application/history.usecase';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import {
  ACTION_NEW,
  ACTION_EXPORT,
} from 'src/app/shared/components/keypad/keypad.component';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { Roles } from 'src/app/shared/enums/roles.enum';
import { KeyPadButton } from 'src/app/shared/interfaces/keybutton.interface';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';
import { FormHistoryComponent } from '../form-history/form-history.component';
@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css'],
})
export class ListHistoriesComponent extends PaginatorData implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent:
    | PaginatorComponent
    | undefined;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', title: 'Nombre' },
    { field: 'apellido', title: 'Apellido' },
    { field: 'dni', title: 'DNI' },
  ];
  data: History[] = [];
  totalRecords = 0;

  tipoRoles: any = Roles;
  listKeyPadButtons: KeyPadButton[] = [
    {
      icon: 'add',
      color: 'primary',
      action: ACTION_NEW,
      tooltip: 'AGREGAR HISTORIA',
    },
    {
      icon: 'cloud_download',
      color: 'accent',
      action: ACTION_EXPORT,
      tooltip: 'EXPORTAR DATA',
    },
  ];

  constructor(
    private readonly utils: UtilsService,
    private readonly historyUseCase: HistoryUseCase
  ) {
    super();
    this.list(0);
  }

  list(page: number) {
    this.historyUseCase
      .listByPage(page, environment.pageSize)
      .subscribe((response: any) => {
        this.dataByPage = response.records;
        this.totalRecords = response.totalRecords;
      });
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(
      `¿Quiere eliminar la historia ${record.nhistoria}?`
    );
    observableConfirm.subscribe((response: string) => {
      if (!response) {
        return;
      }

      this.historyUseCase.delete(record).subscribe(() => {
        this.list(0);
      });
    });
  }

  openForm(evt: any, record: any = null) {
    evt?.stopPropagation();
    const options = {
      disableClose: true,
      panelClass: 'container-modal',
      data: record,
    };
    const reference: MatDialogRef<FormHistoryComponent> = this.utils.openModal(
      FormHistoryComponent,
      options
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        this.historyUseCase.update(response).subscribe((response: History) => {
          this.list(0);
        });
      } else {
        delete response.id;
        this.historyUseCase.insert(response).subscribe((response: History) => {
          this.list(0);
        });
      }
    });
  }

  openOptionsExport() {
    this.utils.openSheet();
  }

  actionButton(action: string) {
    switch (action) {
      case ACTION_NEW:
        this.openForm(null, null);
        break;
      case ACTION_EXPORT:
        this.openOptionsExport();
        break;
    }
  }
}
