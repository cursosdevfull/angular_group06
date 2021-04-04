import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.css'],
})
export class ListMedicsComponent extends PaginatorData implements OnInit {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'cmp', title: 'Nro. Colegiatura' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'apellido', title: 'Apellido' },
    { field: 'especialidad', title: 'Especialidad médica' },
    { field: 'localidad', title: 'Lugar de trabajo' },
  ];

  data: any[] = [
    {
      id: 1,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 2,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 3,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 4,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 5,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 6,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 7,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 8,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      id: 9,
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
  ];

  constructor(private readonly utils: UtilsService) {
    super();
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(
      `¿Quiere eliminar este médico?`
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
