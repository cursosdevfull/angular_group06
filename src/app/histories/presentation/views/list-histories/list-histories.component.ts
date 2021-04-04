import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css'],
})
export class ListHistoriesComponent extends PaginatorData implements OnInit {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nhistoria', title: 'Nro. Historia' },
    { field: 'paciente', title: 'Nombre del paciente' },
    { field: 'medico', title: 'Nombre del médico' },
  ];
  data: any[] = [
    {
      id: 1,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 2,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 3,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 4,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 5,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 6,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 7,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 8,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 9,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 10,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 11,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
    {
      id: 12,
      nhistoria: '12345',
      paciente: 'Carlos Montero',
      medico: 'Juan Huapaya',
    },
  ];

  constructor(private readonly utils: UtilsService) {
    super();
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(
      '¿Realmente quiere eliminar?'
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
