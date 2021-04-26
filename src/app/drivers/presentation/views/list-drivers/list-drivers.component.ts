import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DriverUseCase } from 'src/app/drivers/application/driver.usecase';
import { Driver } from 'src/app/drivers/domain/driver.interface';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import {
  ACTION_EXPORT,
  ACTION_NEW,
} from 'src/app/shared/components/keypad/keypad.component';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { Roles } from 'src/app/shared/enums/roles.enum';
import { KeyPadButton } from 'src/app/shared/interfaces/keybutton.interface';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';
import { FormDriverComponent } from '../form-driver/form-driver.component';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent extends PaginatorData implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent:
    | PaginatorComponent
    | undefined;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', title: 'Nombre principal' },
  ];
  data: Driver[] = [];
  totalRecords = 0;

  tipoRoles: any = Roles;
  listKeyPadButtons: KeyPadButton[] = [
    {
      icon: 'add',
      color: 'primary',
      action: ACTION_NEW,
      tooltip: 'AGREGAR PILOTO',
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
    private readonly driverUseCase: DriverUseCase
  ) {
    super();
    this.list(0);
  }

  list(page: number) {
    this.driverUseCase
      .listByPage(page, environment.pageSize)
      .subscribe((response: { records: Driver[]; totalRecords: number }) => {
        this.dataByPage = response.records;
        this.totalRecords = response.totalRecords;
      });
  }

  delete(evt: any, record: any) {
    evt.stopPropagation();
    const observableConfirm: Observable<string> = this.utils.confirm(
      `¿Quiere eliminar el piloto "${record.nombre}"?`
    );
    observableConfirm.subscribe((response: string) => {
      if (!response) {
        return;
      }

      this.driverUseCase.delete(record).subscribe(() => {
        this.list(0);
      });

      /* const matchedRecord = this.data.findIndex(
        (el: any) => el.id === record.id
      );
      this.data.splice(matchedRecord, 1);
      const totalRecordsInCurrentPage = this.data.slice(
        this.currentPage * environment.pageSize,
        this.currentPage * environment.pageSize + environment.pageSize
      ); */

      /*       if (totalRecordsInCurrentPage.length > 0) {
        this.loadData(this.currentPage);
      } else if (this.currentPage > 0) {
        (this.paginatorComponent as PaginatorComponent).goToPage(
          this.currentPage - 1
        );
        this.loadData(this.currentPage - 1);
      } else {
        (this.paginatorComponent as PaginatorComponent).goToPage(0);
        this.loadData();
      } */
    });
  }

  openForm(evt: any, record: any = null) {
    evt?.stopPropagation();
    const options = {
      disableClose: true,
      panelClass: 'container-modal',
      data: record,
    };
    const reference: MatDialogRef<FormDriverComponent> = this.utils.openModal(
      FormDriverComponent,
      options
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        this.driverUseCase.update(response).subscribe((response: Driver) => {
          this.list(0);
        });
      } else {
        delete response.id;
        this.driverUseCase.insert(response).subscribe((response: Driver) => {
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
