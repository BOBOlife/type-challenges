type Last<T extends any[]> = T extends [...infer P, infer Last] ? Last : never;
