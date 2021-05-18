import { TestBed } from '@angular/core/testing';
import { TestbedService } from '../04-testbed/testbed.service';
import { DependenciaTBService } from './dependenciatb.service';

describe('dependenciatb.service', () => {
  let dependenciatbService: DependenciaTBService;
  let testbedSpyService: jasmine.SpyObj<TestbedService>;

  beforeEach(() => {
    const objSpy = jasmine.createSpyObj('TestbedService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [
        DependenciaTBService,
        { provide: TestbedService, useValue: objSpy },
      ],
    });
    dependenciatbService = TestBed.inject(DependenciaTBService);
    testbedSpyService = TestBed.inject(
      TestbedService
    ) as jasmine.SpyObj<TestbedService>;
  });

  it('getValue', () => {
    const messageSpy = 'Valor espía';
    testbedSpyService.getValue.and.returnValue(messageSpy);

    const value = dependenciatbService.getValue();
    expect(value).toBe(messageSpy);
  });
});
