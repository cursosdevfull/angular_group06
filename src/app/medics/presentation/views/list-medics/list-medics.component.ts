import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';

@Component({
  selector: 'amb-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.css'],
})
export class ListMedicsComponent implements OnInit {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'cmp', title: 'Nro. Colegiatura' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'apellido', title: 'Apellido' },
    { field: 'especialidad', title: 'Especialidad médica' },
    { field: 'localidad', title: 'Lugar de trabajo' },
  ];

  data: any = [
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

  constructor() {}

  ngOnInit(): void {}
}
