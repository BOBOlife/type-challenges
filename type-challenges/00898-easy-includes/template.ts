type IsEqual<X, Y> = (<T>() => T extends X ? true : false) extends (<T>() => T extends Y ? true : false) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer V]
	? IsEqual<U, K> extends true
		? true
		: Includes<V, U>
	: false;
