import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigLayout } from '../interfaces/config.interface';
import { CONFIG_TOKEN } from '../tokens';

@NgModule()
export class ConfigModule {
  static forRoot(config: ConfigLayout): ModuleWithProviders<ConfigModule> {
    const modulo = {
      ngModule: ConfigModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };

    return modulo;
  }
}
