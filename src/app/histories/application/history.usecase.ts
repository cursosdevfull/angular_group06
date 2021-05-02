import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../domain/history.interface';
import { HistoryRepository } from './history.repository';

@Injectable()
export class HistoryUseCase {
  constructor(private readonly historyRepository: HistoryRepository) {}

  listAll(): Observable<History[]> {
    return this.historyRepository.listAll();
  }

  insert(history: History): Observable<History> {
    return this.historyRepository.insert(history);
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: History[]; totalRecords: number }> {
    return this.historyRepository.listByPage(page, pageSize);
  }

  delete(history: History): Observable<History> {
    return this.historyRepository.delete(history);
  }

  update(history: History): Observable<History> {
    return this.historyRepository.update(history);
  }
}
