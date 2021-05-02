import { Observable } from 'rxjs';
import { History } from '../domain/history.interface';

export abstract class HistoryRepository {
  abstract listAll(): Observable<History[]>;
  abstract insert(history: History): Observable<History>;
  abstract listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: History[]; totalRecords: number }>;
  abstract delete(history: History): Observable<History>;
  abstract update(history: History): Observable<History>;
}
