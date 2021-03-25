export { };

type T1 = number | string | never;
// 유니온 타입의 never라는 타입은 제거가 됨
// 조건 부 타입에서 자주 사용됨

type Exclude<T, U> = T extends U ? never : T;
// T가 U에 할당 가능하다면 never를 사용하고 아니면 T를 사용
type T2 = Exclude<1 | 3 | 5 | 7, 1 | 5 | 9>;
// T2 3 | 7

type T3 = Exclude<string | number | (() => void), Function>;
// Function에 할당 가능한 것이 적용됨
// T3 string | number

type Extract<T, U> = T extends U ? T : never;
type T4 = Extract<1 | 3 | 5 | 7, 1 | 5 | 9>;
// T4는 1 | 5