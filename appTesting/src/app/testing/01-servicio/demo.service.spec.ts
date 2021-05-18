import { DemoService } from './demo.service';

describe('demo.service', () => {
  let demoService: DemoService;

  beforeEach(() => {
    demoService = new DemoService();
  });

  it('getValue', () => {
    const value = demoService.getValue();

    expect(value).toBe('Valor real');
    // expect(demoService.getValue()).toBe("Valor real")
  });

  it('getValueAsObservable', (done) => {
    demoService.getValueAsObservable().subscribe((value) => {
      expect(value).toBe('Valor observable');
      done();
    });
  });

  it('getValueAsPromise', async (done) => {
    demoService.getValueAsPromise().then((value) => {
      expect(value).toBe('Valor promesa');
      done();
    });

    const value = await demoService.getValueAsPromise();
    expect(value).toBe('Valor promesa');
  });
});
