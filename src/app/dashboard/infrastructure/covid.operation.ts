import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CovidRepository } from '../application/covid.repository';
import { Covid } from '../domain/covid';

@Injectable()
export class CovidOperation extends CovidRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getAll(): Observable<Covid[]> {
    return this.http
      .get<Covid[]>('https://covid19.mathdro.id/api/confirmed')
      .pipe(map((data) => data.slice(0, 30)));
  }
}
