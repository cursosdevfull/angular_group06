import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css'],
})
export class ListHistoriesComponent implements OnInit {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'nhistoria', title: 'Nro. Historia' },
    { field: 'paciente', title: 'Nombre del paciente' },
    { field: 'medico', title: 'Nombre del médico' },
  ];
  data: any[] = [
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
  ];
  dataByPage: any = [];

  pageSize: number = environment.pageSize;

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page: number = 0) {
    this.dataByPage = this.data.slice(
      page * this.pageSize,
      page * this.pageSize + this.pageSize
    );
  }

  userChangedPage(page: number) {
    this.loadData(page);
  }
}
