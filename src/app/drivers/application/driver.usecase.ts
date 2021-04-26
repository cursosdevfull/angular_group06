import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../domain/driver.interface';
import { DriverRepository } from './driver.repository';

@Injectable()
export class DriverUseCase {
  constructor(private readonly driverRepository: DriverRepository) {}

  listAll(): Observable<Driver[]> {
    return this.driverRepository.listAll();
  }

  insert(driver: Driver): Observable<Driver> {
    return this.driverRepository.insert(driver);
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: Driver[]; totalRecords: number }> {
    return this.driverRepository.listByPage(page, pageSize);
  }

  delete(driver: Driver): Observable<Driver> {
    return this.driverRepository.delete(driver);
  }

  update(driver: Driver): Observable<Driver> {
    return this.driverRepository.update(driver);
  }
}
