import { Injectable } from '@angular/core';
import { TestbedService } from '../04-testbed/testbed.service';

@Injectable({
  providedIn: 'root',
})
export class DependenciaTBService {
  constructor(private testbedService: TestbedService) {}

  getValue() {
    return this.testbedService.getValue();
  }
}
