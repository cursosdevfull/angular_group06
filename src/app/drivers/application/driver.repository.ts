import { Observable } from 'rxjs';
import { Driver } from '../domain/driver.interface';

export abstract class DriverRepository {
  abstract listAll(): Observable<Driver[]>;
  abstract insert(driver: Driver): Observable<Driver>;
  abstract listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: Driver[]; totalRecords: number }>;
  abstract delete(driver: Driver): Observable<Driver>;
  abstract update(driver: Driver): Observable<Driver>;
}
