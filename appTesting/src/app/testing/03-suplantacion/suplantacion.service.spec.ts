import { Observable, of } from 'rxjs';
import { DemoService } from '../01-servicio/demo.service';
import { SuplantacionService } from './suplantacion.service';

class FakeService {
  getValue() {
    return 'Valor falso';
  }

  getValueAsObservable(): Observable<string> {
    return of('Valor falso observable');
  }

  getValueAsPromise(): Promise<string> {
    return Promise.resolve('Valor falso promesa');
  }
}

describe('suplantacion.service', () => {
  let suplantacionService: SuplantacionService;

  it('getValue real', () => {
    const demoService = new DemoService();
    suplantacionService = new SuplantacionService(demoService);

    const value = suplantacionService.getValue();
    expect(value).toBe('Valor real');
  });

  it('getValue falso', () => {
    const fakeService = new FakeService();
    suplantacionService = new SuplantacionService(fakeService);

    const value = suplantacionService.getValue();
    expect(value).toBe('Valor falso');
  });

  it('getValue falso con objeto', () => {
    const message = 'Valor de objeto falso';
    const objFalse = {
      // getValue: () => message
      getValue() {
        return message;
      },
      /*       getValueAsObservable() {
        return of(message)
      },
      getValueAsPromise(){
        return Promise.resolve(message)
      } */
    };

    suplantacionService = new SuplantacionService(objFalse as DemoService);
  });
});
