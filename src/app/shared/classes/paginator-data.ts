import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  template: '',
})
export abstract class PaginatorData {
  abstract data: any[];
  dataByPage: any = [];
  pageSize: number = environment.pageSize;
  currentPage: number = 0;

  loadData(page: number = 0) {
    this.currentPage = page;
    this.dataByPage = this.data.slice(
      page * this.pageSize,
      page * this.pageSize + this.pageSize
    );
  }

  ngOnInit(): void {
    this.loadData();
  }
}
