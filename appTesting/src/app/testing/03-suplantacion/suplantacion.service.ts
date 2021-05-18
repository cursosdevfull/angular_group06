import { Injectable } from '@angular/core';
import { DemoService } from '../01-servicio/demo.service';

@Injectable({
  providedIn: 'root',
})
export class SuplantacionService {
  constructor(private demoService: DemoService) {}

  getValue(): string {
    return this.demoService.getValue();
  }
}
