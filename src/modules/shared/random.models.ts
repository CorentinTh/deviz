import _ from 'lodash';

export { takeUniqueRandoms };

function takeUniqueRandoms<T>(data: T[], { count = 1, excludeBy = () => false }: { count?: number; excludeBy?: (item: T) => boolean } = {}): T[] {
  return _.chain(data).shuffle().reject(excludeBy).take(count).value();
}
