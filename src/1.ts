export { };

// mapped 타입으로 만들어지는 것은 객체
// 키 부부은 []
// mapped 는 in 이라는 키워드를 사용
//'prop1' | 'prop2'이 중요 전체 객체의 속성으로 만들어짐
// type T1 = {prop1: boolean, prop2: boolean}
type T1 = { [K in 'prop1' | 'prop2']: boolean };