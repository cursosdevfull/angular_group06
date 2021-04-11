import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() totalRecords: number = 0;
  @Input() pageSize: number = environment.pageSize;
  @Output() onDataChange: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor() {}

  ngOnInit(): void {}

  changePage(evt: {
    length: number;
    pageIndex: number;
    pageSize: number;
    previousPageIndex?: number;
  }) {
    this.onDataChange.emit(evt.pageIndex);
  }

  goToPage(page: number) {
    (this.paginator as MatPaginator).pageIndex = page;
  }
}
