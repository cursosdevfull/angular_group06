import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';

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
  data: any = [
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
    { nhistoria: '12345', paciente: 'Carlos Montero', medico: 'Juan Huapaya' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
