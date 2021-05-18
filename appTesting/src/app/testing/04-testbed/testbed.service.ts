import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestbedService {
  getValue(): string {
    return 'Valor real';
  }
}
