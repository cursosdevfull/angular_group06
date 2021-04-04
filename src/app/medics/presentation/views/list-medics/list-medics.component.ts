import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { environment } from 'src/environments/environment';

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
