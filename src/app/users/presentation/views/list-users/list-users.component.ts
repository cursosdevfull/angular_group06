import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent extends PaginatorData implements OnInit {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', title: 'Nombre completo' },
    { field: 'correo', title: 'Correo' },
    { field: 'roles', title: 'Roles' },
  ];
  data: any[] = [
    {
      id: 1,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 2,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 3,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 4,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 5,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 6,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 7,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 8,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 9,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 10,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 11,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
    {
      id: 12,
      nombre: 'Nombre',
      correo: 'correo@correo.com',
      roles: 'ADMIN, OPERATOR',
    },
  ];

  pageSize: number = environment.pageSizeUser;

  constructor(private readonly utils: UtilsService) {
    super();
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(
      `¿Quiere eliminar este usuario?`
    );
    observableConfirm.subscribe((response: string) => {
      if (!response) {
        return;
      }

      const matchedRecord = this.data.findIndex(
        (el: any) => el.id === record.id
      );
      this.data.splice(matchedRecord, 1);
      this.loadData();
    });
  }
}
