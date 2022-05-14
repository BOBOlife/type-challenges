type MyReturnType<T extends (...args: any[]) => unknown> = T extends (...args: any[]) => infer P ? P : never;
