

// Utility to perform deep merge of objects
export function mergeTheme<T>(target: any, source: Partial<any>): T {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  for (const key of Object.keys(source)) {
    const targetValue = (target as any)[key];
    const sourceValue = (source as any)[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      (target as any)[key] = [...targetValue, ...sourceValue];
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      (target as any)[key] = mergeTheme({ ...targetValue }, sourceValue);
    } else {
      (target as any)[key] = sourceValue;
    }
  }

  return target;
}
