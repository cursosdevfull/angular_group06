import { DemoService } from '../01-servicio/demo.service';
import { DependenciaService } from './dependencia.service';

describe('dependencia.service', () => {
  let dependenciaService: DependenciaService;
  let demoService: DemoService;

  beforeEach(() => {
    demoService = new DemoService();
    dependenciaService = new DependenciaService(demoService);
  });

  it('getValue', () => {
    const value = dependenciaService.getValue();

    expect(value).toBe('Valor real');
    // expect(demoService.getValue()).toBe("Valor real")
  });

  it('getValueAsObservable', (done) => {
    dependenciaService.getValueAsObservable().subscribe((value) => {
      expect(value).toBe('Valor observable');
      done();
    });
  });

  it('getValueAsPromise', async (done) => {
    dependenciaService.getValueAsPromise().then((value) => {
      expect(value).toBe('Valor promesa');
      done();
    });

    const value = await dependenciaService.getValueAsPromise();
    expect(value).toBe('Valor promesa');
  });
});
