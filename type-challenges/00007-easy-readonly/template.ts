type MyReadonly<T> = {
  readonly [p in keyof T]: T[p]
};

// 和第一题类似
