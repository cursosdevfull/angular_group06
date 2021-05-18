import { DtoExport } from 'src/app/shared/interfaces/dto-export.interface';
import { Medic } from '../domain/medic.interface';

export interface IDtoMedicExport {
  Nombre: string;
  Apellido: string;
  DNI: string;
  Correo: string;
}

export class DtoMedicExport implements DtoExport<Medic, IDtoMedicExport> {
  mapping(data: Medic[]): IDtoMedicExport[] {
    return data.map((el) => ({
      Nombre: el.nombre,
      Apellido: el.apellido,
      DNI: el.dni,
      Correo: el.correo,
    }));
  }
}
