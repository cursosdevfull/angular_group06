import { TestBed } from '@angular/core/testing';
import { TestbedService } from './testbed.service';

describe('testbed.service', () => {
  let testbedService: TestbedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestbedService],
    });
    testbedService = TestBed.inject(TestbedService);
  });

  it('getValue', () => {
    const value = testbedService.getValue();
    expect(value).toBe('Valor real');
  });
});
