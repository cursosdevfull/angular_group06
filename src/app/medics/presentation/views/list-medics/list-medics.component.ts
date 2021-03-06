import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DtoMedicExport } from 'src/app/medics/application/medic-export.dto';
import { MedicUseCase } from 'src/app/medics/application/medic.usecase';
import { Medic } from 'src/app/medics/domain/medic.interface';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import {
  ACTION_NEW,
  ACTION_EXPORT,
} from 'src/app/shared/components/keypad/keypad.component';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { Roles } from 'src/app/shared/enums/roles.enum';
import { KeyPadButton } from 'src/app/shared/interfaces/keybutton.interface';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';
import { FormMedicComponent } from '../form-medic/form-medic.component';

@Component({
  selector: 'amb-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.css'],
})
export class ListMedicsComponent extends PaginatorData implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent:
    | PaginatorComponent
    | undefined;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'nombre', title: 'Nombre' },
    { field: 'apellido', title: 'Apellido' },
    { field: 'cmp', title: 'CMP' },
    { field: 'dni', title: 'DNI' },
  ];

  data: Medic[] = [];
  totalRecords = 0;

  tipoRoles: any = Roles;
  listKeyPadButtons: KeyPadButton[] = [
    {
      icon: 'add',
      color: 'primary',
      action: ACTION_NEW,
      tooltip: 'AGREGAR MÉDICO',
    },
    {
      icon: 'cloud_download',
      color: 'accent',
      action: ACTION_EXPORT,
      tooltip: 'EXPORTAR DATA',
    },
  ];

  constructor(
    private readonly utils: UtilsService,
    private readonly medicUseCase: MedicUseCase
  ) {
    super();
    this.list(0);
  }

  list(page: number) {
    this.medicUseCase
      .listByPage(page, environment.pageSize)
      .subscribe((response: { records: Medic[]; totalRecords: number }) => {
        this.dataByPage = response.records;
        this.totalRecords = response.totalRecords;
      });
    this.paginatorComponent?.goToPage(page);
  }

  delete(evt: any, record: any) {
    evt.stopPropagation();
    const observableConfirm: Observable<string> = this.utils.confirm(
      `¿Quiere eliminar este médico?`
    );
    observableConfirm.subscribe((response: string) => {
      if (!response) {
        return;
      }

      this.medicUseCase.delete(record).subscribe(() => {
        this.list(0);
      });
    });
  }

  openForm(evt: any, record: any = null) {
    evt?.stopPropagation();
    const options = {
      disableClose: true,
      panelClass: 'container-modal',
      data: record,
    };
    const reference: MatDialogRef<FormMedicComponent> = this.utils.openModal(
      FormMedicComponent,
      options
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const id = +response.id;
        delete response.id;
        const valueAsFormData = this.convertToFormData(response);
        this.medicUseCase
          .update(valueAsFormData, id)
          .subscribe((response: Medic) => {
            this.list(0);
          });
      } else {
        delete response.id;
        const valueAsFormData = this.convertToFormData(response);
        this.medicUseCase
          .insert(valueAsFormData)
          .subscribe((response: Medic) => {
            this.list(0);
          });
      }
    });
  }

  openOptionsExport() {
    this.medicUseCase.listAll().subscribe((response: Medic[]) => {
      const dto = new DtoMedicExport();
      this.utils.openSheet(response, dto, 'Listado de médicos', 'medicos');
    });
  }

  actionButton(action: string) {
    switch (action) {
      case ACTION_NEW:
        this.openForm(null, null);
        break;
      case ACTION_EXPORT:
        this.openOptionsExport();
        break;
    }
  }

  convertToFormData(obj: any): FormData {
    const formData = new FormData();

    for (const key of Object.keys(obj)) {
      const value = obj[key];
      formData.append(key, value);
    }

    return formData;
  }
}
