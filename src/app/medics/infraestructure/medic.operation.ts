import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicRepository } from '../application/medic.repository';
import { Medic } from '../domain/medic.interface';

@Injectable()
export class MedicOperation extends MedicRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  listAll(): Observable<Medic[]> {
    return this.http.get<Medic[]>(`${environment.pathAPIRest}/medics`);
  }
  insert(medic: Medic): Observable<Medic> {
    return this.http.post<Medic>(`${environment.pathAPIRest}/medics`, medic);
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: Medic[]; totalRecords: number }> {
    return this.http.get<{ records: Medic[]; totalRecords: number }>(
      `${environment.pathAPIRest}/medics/page/${page}/${pageSize}`
    );
  }

  delete(medic: Medic): Observable<Medic> {
    return this.http.delete<Medic>(
      `${environment.pathAPIRest}/medics/${medic.id}`
    );
  }
  update(medic: Medic): Observable<Medic> {
    const dataToSent: any = Object.assign({}, medic);
    delete dataToSent.id;

    return this.http.put<Medic>(
      `${environment.pathAPIRest}/medics/${medic.id}`,
      dataToSent
    );
  }
}
