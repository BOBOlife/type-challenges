type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
};

// key 只可以是 string number symbol 三种类型