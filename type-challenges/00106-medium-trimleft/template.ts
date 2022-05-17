type TrimLeft<S extends string> = S extends `${'\n' | '\t' | ' '}${infer Str}` ? TrimLeft<Str> : S;

// 神光小册子有这一道题目  模式匹配做提取写的很不错