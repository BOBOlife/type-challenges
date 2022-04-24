import type { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'; }>>,
];
// 下面的注释是预期 下面那行代码会报错
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;