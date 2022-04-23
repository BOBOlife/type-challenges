type MyPick<T, K extends keyof T> = {
  [p in K]: T[p]
};

// 是对象
// 联合类型
// 类型约束
// 遍历