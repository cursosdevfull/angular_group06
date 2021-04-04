import { Component, OnInit } from '@angular/core';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
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
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
    { nombre: 'Nombre', apellido: 'Apellido', licencia: 'Licencia' },
  ];

  constructor() {
    super();
  }
}
