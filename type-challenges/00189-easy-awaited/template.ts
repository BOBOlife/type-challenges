type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
  ? MyAwaited<U>
  : U
  : never;

  // infer 
  // 只能在条件类型里面d使用
  // 设置未知数 变量