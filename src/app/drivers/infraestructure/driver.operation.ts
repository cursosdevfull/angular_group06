import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverRepository } from '../application/driver.repository';
import { Driver } from '../domain/driver.interface';

@Injectable()
export class DriverOperation extends DriverRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  listAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${environment.pathAPIRest}/drivers`);
  }
  insert(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(`${environment.pathAPIRest}/drivers`, driver);
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: Driver[]; totalRecords: number }> {
    return this.http.get<{ records: Driver[]; totalRecords: number }>(
      `${environment.pathAPIRest}/drivers/page/${page}/${pageSize}`
    );
  }

  delete(driver: Driver): Observable<Driver> {
    return this.http.delete<Driver>(
      `${environment.pathAPIRest}/drivers/${driver.id}`
    );
  }
  update(driver: Driver): Observable<Driver> {
    const dataToSent: any = Object.assign({}, driver);
    delete dataToSent.id;

    return this.http.put<Driver>(
      `${environment.pathAPIRest}/drivers/${driver.id}`,
      dataToSent
    );
  }
}
