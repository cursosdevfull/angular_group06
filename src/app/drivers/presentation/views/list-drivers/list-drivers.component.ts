import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent extends PaginatorData implements OnInit {
  // listFields: string[] = ['nombre', 'apellido', 'licencia'];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', title: 'Nombre principal' },
    { field: 'apellido', title: 'Apellido paterno' },
    { field: 'licencia', title: 'Licencia de conducir' },
  ];
  data: any[] = [
    { id: 1, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 2, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 3, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 4, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 5, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 6, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 7, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 8, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 9, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 10, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 11, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
  ];

  constructor(private readonly utils: UtilsService) {
    super();
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(
      `¿Quiere eliminar el piloto "${record.nombre} ${record.apellido}"?`
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
