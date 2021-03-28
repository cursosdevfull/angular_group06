import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent implements OnInit {
  // listFields: string[] = ['nombre', 'apellido', 'licencia'];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', title: 'Nombre principal' },
    { field: 'apellido', title: 'Apellido paterno' },
    { field: 'licencia', title: 'Licencia de conducir' },
  ];
  data: any = [
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
