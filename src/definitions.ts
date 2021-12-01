export interface BiometricsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
