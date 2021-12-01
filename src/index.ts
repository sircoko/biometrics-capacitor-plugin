import { registerPlugin } from '@capacitor/core';

import type { BiometricsPlugin } from './definitions';

const Biometrics = registerPlugin<BiometricsPlugin>('Biometrics', {
  web: () => import('./web').then(m => new m.BiometricsWeb()),
});

export * from './definitions';
export { Biometrics };
