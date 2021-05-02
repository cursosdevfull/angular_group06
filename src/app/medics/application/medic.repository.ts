import { Observable } from 'rxjs';
import { Medic } from '../domain/medic.interface';

export abstract class MedicRepository {
  abstract listAll(): Observable<Medic[]>;
  abstract insert(medic: Medic): Observable<Medic>;
  abstract listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: Medic[]; totalRecords: number }>;
  abstract delete(medic: Medic): Observable<Medic>;
  abstract update(medic: Medic): Observable<Medic>;
}
