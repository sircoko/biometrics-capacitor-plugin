import { WebPlugin } from '@capacitor/core';

import type { BiometricsPlugin } from './definitions';

export class BiometricsWeb extends WebPlugin implements BiometricsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
