import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medic } from '../domain/medic.interface';
import { MedicRepository } from './medic.repository';

@Injectable()
export class MedicUseCase {
  constructor(private readonly medicRepository: MedicRepository) {}

  listAll(): Observable<Medic[]> {
    return this.medicRepository.listAll();
  }

  insert(medic: Medic): Observable<Medic> {
    return this.medicRepository.insert(medic);
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: Medic[]; totalRecords: number }> {
    return this.medicRepository.listByPage(page, pageSize);
  }

  delete(medic: Medic): Observable<Medic> {
    return this.medicRepository.delete(medic);
  }

  update(medic: Medic): Observable<Medic> {
    return this.medicRepository.update(medic);
  }
}
