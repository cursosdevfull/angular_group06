import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
import { DtoUserExport } from 'src/app/users/application/user-export.dto';
import { UserUseCase } from 'src/app/users/application/user.usecase';
import { User } from 'src/app/users/domain/user.interface';
import { environment } from 'src/environments/environment';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent extends PaginatorData implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent:
    | PaginatorComponent
    | undefined;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', title: 'Nombre' },
    { field: 'correo', title: 'Correo' },
  ];
  data: User[] = [];

  totalRecords = 0;

  tipoRoles: any = Roles;
  listKeyPadButtons: KeyPadButton[] = [
    {
      icon: 'add',
      color: 'primary',
      action: ACTION_NEW,
      tooltip: 'AGREGAR USUARIO',
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
    private readonly userUseCase: UserUseCase
  ) {
    super();
    this.list(0);
  }

  list(page: number) {
    this.userUseCase
      .listByPage(page, environment.pageSize)
      .subscribe((response: { records: User[]; totalRecords: number }) => {
        this.dataByPage = response.records;
        this.totalRecords = response.totalRecords;
      });
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(
      `¿Quiere eliminar este usuario?`
    );
    observableConfirm.subscribe((response: string) => {
      if (!response) {
        return;
      }

      this.userUseCase.delete(record).subscribe(() => {
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
    const reference: MatDialogRef<FormUserComponent> = this.utils.openModal(
      FormUserComponent,
      options
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        this.userUseCase.update(response).subscribe((response: User) => {
          this.list(0);
        });
      } else {
        delete response.id;
        this.userUseCase.insert(response).subscribe((response: User) => {
          this.list(0);
        });
      }
    });
  }

  openOptionsExport() {
    this.userUseCase.listAll().subscribe((response: User[]) => {
      const dto = new DtoUserExport();
      this.utils.openSheet(response, dto, 'Listado de usuarios', 'usuarios');
    });
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
