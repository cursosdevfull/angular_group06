import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';

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
    { id: 12, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 13, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 14, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 15, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 16, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 17, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 18, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 19, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 20, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 21, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { id: 22, nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
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
      const totalRecordsInCurrentPage = this.data.slice(
        this.currentPage * environment.pageSize,
        this.currentPage * environment.pageSize + environment.pageSize
      );

      if (totalRecordsInCurrentPage.length > 0) {
        /*  (this.paginatorComponent as PaginatorComponent).goToPage(
          this.currentPage
        ); */
        this.loadData(this.currentPage);
      } else if (this.currentPage > 0) {
        (this.paginatorComponent as PaginatorComponent).goToPage(
          this.currentPage - 1
        );
        this.loadData(this.currentPage - 1);
      } else {
        (this.paginatorComponent as PaginatorComponent).goToPage(0);
        this.loadData();
      }
    });
  }
}
