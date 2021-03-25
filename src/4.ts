export { };

type ReturType<T> = T extends (...args: any[]) => infer R ? R : any;
type T1 = ReturnType<() => string>;

function f1(s: string): number {
    return s.length;
}

type T2 = ReturnType<(typeof f1)>

// T가 함수 일 때 함수의 반환타입을 반환함
// 타입 추론을 위해서 infer
// infer를 이용하면 반환 타입을 R에 넣어 줄 수 있다.
// infer키워드는 조건부 타입을 정의 할 때 
// extends 뒤에서 사용 됨

// typeof를 통해 함수 형을 가져온다.