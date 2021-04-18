import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { MetaDataColumn } from '../../services/meta-data-column';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @Input() data: any = [];
  @Input() metaDataColumns: MetaDataColumn[] = [];
  @Input() totalRecords: string = '';
  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  @ContentChildren(MatColumnDef, { descendants: true }) columnsDef:
    | QueryList<MatColumnDef>
    | undefined;

  listFields: string[] = [];
  dataSource: any;
  pageSize: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.listFields = this.metaDataColumns.map((el) => el.field);
    this.pageSize = environment.pageSize;
    this.loadData();
  }

  ngOnChanges() {
    this.loadData();
  }

  loadData() {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }
    this.columnsDef.forEach((columnDef) => this.table?.addColumnDef(columnDef));
    if (this.columnsDef.length) {
      this.listFields.push('actions');
    }
  }

  handlerPage(evt: any) {
    console.log(evt.pageIndex);
  }

  markRecord(row: any) {
    if (row.hasOwnProperty('marca')) {
      row.marca = !row.marca;
    }
  }
}
