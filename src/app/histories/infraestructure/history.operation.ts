import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoryRepository } from '../application/history.repository';
import { History } from '../domain/history.interface';

@Injectable()
export class HistoryOperation extends HistoryRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  listAll(): Observable<History[]> {
    return this.http.get<History[]>(`${environment.pathAPIRest}/histories`);
  }
  insert(history: History): Observable<History> {
    return this.http.post<History>(
      `${environment.pathAPIRest}/histories`,
      history
    );
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: History[]; totalRecords: number }> {
    return this.http.get<{ records: History[]; totalRecords: number }>(
      `${environment.pathAPIRest}/histories/page/${page}/${pageSize}`
    );
  }

  delete(history: History): Observable<History> {
    return this.http.delete<History>(
      `${environment.pathAPIRest}/histories/${history.id}`
    );
  }
  update(history: History): Observable<History> {
    const dataToSent: any = Object.assign({}, history);
    delete dataToSent.id;

    return this.http.put<History>(
      `${environment.pathAPIRest}/histories/${history.id}`,
      dataToSent
    );
  }
}
