import { DtoExport } from 'src/app/shared/interfaces/dto-export.interface';
import { Driver } from '../domain/driver.interface';

export interface IDtoDriverExport {
  'Nombre del piloto': string;
}

export class DtoDriverExport implements DtoExport<Driver, IDtoDriverExport> {
  mapping(data: Driver[]): IDtoDriverExport[] {
    return data.map((el) => ({
      'Nombre del piloto': el.nombre,
    }));
  }
}
