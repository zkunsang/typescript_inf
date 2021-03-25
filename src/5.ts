export { };

// 어떤 값의 배열이면 (infer U)[]
// 그 배열의 아이템을 사용하겠다. T4, T1
// 배열이 아니라면
// T extends (...args: any[]) => infer U 
// 함수에 할당 가능한 타입이라면
// 함수의 반환값을 사용하겠다. T2
// 함수에 할당할 수 없다면
// 프로미스에 할당 가능한 타입이면
// 프로미스의 값인 U를 사용 T3
// 아니면 T자기 자신을 사용 T0
type Unpacked<T> = T extends (infer U)[]
    ? U
    : T extends (...args: any[]) => infer U
    ? U
    : T extends Promise<infer U>
    ? U : T;

type T0 = Unpacked<string>;
type T1 = Unpacked<string[]>;
type T2 = Unpacked<() => string>;
type T3 = Unpacked<Promise<string>>;
type T4 = Unpacked<Promise<string>[]>;
type T5 = Unpacked<Unpacked<Promise<string>[]>>;