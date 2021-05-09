import { DtoExport } from 'src/app/shared/interfaces/dto-export.interface';
import { User } from '../domain/user.interface';

export interface IDtoUserExport {
  'Nombre Completo': string;
  'Correo electrónico': string;
}

export class DtoUserExport implements DtoExport<User, IDtoUserExport> {
  mapping(data: User[]): IDtoUserExport[] {
    return data.map((el) => ({
      'Nombre Completo': el.nombre,
      'Correo electrónico': el.correo,
    }));
  }
}
