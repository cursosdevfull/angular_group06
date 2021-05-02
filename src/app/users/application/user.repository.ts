import { Observable } from 'rxjs';
import { User } from '../domain/user.interface';

export abstract class UserRepository {
  abstract listAll(): Observable<User[]>;
  abstract insert(user: User): Observable<User>;
  abstract listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: User[]; totalRecords: number }>;
  abstract delete(user: User): Observable<User>;
  abstract update(user: User): Observable<User>;
}
