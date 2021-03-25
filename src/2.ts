export { };

type IsStringType<T> = T extends string ? 'yes' : 'no';
type T1 = IsStringType<string | number>;
type T2 = IsStringType<string> | IsStringType<number>;

// T1의 타입은 yes | no
// 조건부 타입을 사용하게 되면 
// type T1이
// type T2처럼 인식된다.

type Array2<T> = Array<T>;
type T3 = Array2<string | number>;

const t3: T3 = [1, 'a'];
const t2: T2 = 'yes';
const t2_: T2 = 'no';