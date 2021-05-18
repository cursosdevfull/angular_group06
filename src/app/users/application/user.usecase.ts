import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  listAll(): Observable<User[]> {
    return this.userRepository.listAll();
  }

  insert(user: User): Observable<User> {
    return this.userRepository.insert(user);
  }

  listByPage(
    page: number,
    pageSize: number
  ): Observable<{ records: User[]; totalRecords: number }> {
    return this.userRepository.listByPage(page, pageSize);
  }

  delete(user: User): Observable<User> {
    return this.userRepository.delete(user);
  }

  update(user: User): Observable<User> {
    return this.userRepository.update(user);
  }
}
