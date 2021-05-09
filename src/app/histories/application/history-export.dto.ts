import { DtoExport } from 'src/app/shared/interfaces/dto-export.interface';
import { History } from '../domain/history.interface';

export interface IDtoHistoryExport {
  Paciente: string;
  Sintomas: string;
  Tratamiento: string;
}

export class DtoHistoryExport implements DtoExport<History, IDtoHistoryExport> {
  mapping(data: History[]): IDtoHistoryExport[] {
    return data.map((el) => ({
      Paciente: el.nombre + ' ' + el.apellido,
      Sintomas: el.sintomas,
      Tratamiento: el.tratamiento,
    }));
  }
}
