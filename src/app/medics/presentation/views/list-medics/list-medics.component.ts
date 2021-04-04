import { Component, OnInit } from '@angular/core';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
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
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
    {
      cmp: 'CMP',
      nombre: 'Nombre',
      apellido: 'Apellido',
      especialidad: 'Especialidad',
      localidad: 'Localidad',
    },
  ];

  constructor() {
    super();
  }
}
