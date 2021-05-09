import { Observable } from 'rxjs';
import { Covid } from '../domain/covid';

export abstract class CovidRepository {
  abstract getAll(): Observable<Covid[]>;
}
