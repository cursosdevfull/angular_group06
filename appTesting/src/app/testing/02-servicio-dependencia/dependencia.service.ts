import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoService } from '../01-servicio/demo.service';

@Injectable({
  providedIn: 'root',
})
export class DependenciaService {
  constructor(private readonly demoService: DemoService) {}

  getValue(): string {
    return this.demoService.getValue();
  }

  getValueAsObservable(): Observable<string> {
    return this.demoService.getValueAsObservable();
  }

  getValueAsPromise(): Promise<string> {
    return this.demoService.getValueAsPromise();
  }
}
