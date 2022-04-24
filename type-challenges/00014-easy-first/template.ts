// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// type First<T extends any[]> = T extends [] ? never : T[0];

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type First<T extends any[]> = T extends [infer First, ...infer rest] ? First : never;
// 看看能不能解构出First 能解构出就取First 不能解构出就 never类型


// 知识点 四种方法
// 1. 获取extends的条件判断
// 2. 获取tuple的length属性
// 3. extends union 判断规则
// 4. infer 的使用 和js中的解构有点像