import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRepository } from '../application/user.repository';
import { User } from '../domain/user.interface';

@Injectable()
export class UserOperation extends UserRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  listAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.pathAPIRest}/users`);
  }
  insert(user: User): Observable<User> {
    return this.http.post<User>(`${environment.pathAPIRest}/users`, user);
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: User[]; totalRecords: number }> {
    return this.http.get<{ records: User[]; totalRecords: number }>(
      `${environment.pathAPIRest}/users/page/${page}/${pageSize}`
    );
  }

  delete(user: User): Observable<User> {
    return this.http.delete<User>(
      `${environment.pathAPIRest}/users/${user.id}`
    );
  }
  update(user: User): Observable<User> {
    const dataToSent: any = Object.assign({}, user);
    delete dataToSent.id;

    return this.http.put<User>(
      `${environment.pathAPIRest}/users/${user.id}`,
      dataToSent
    );
  }
}
