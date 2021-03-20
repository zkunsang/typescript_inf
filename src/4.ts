export { };

interface Person {
    readonly name: string;
    age?: number;
    // age: number | undefined
}

// 리터럴 형식으로 치기화를 하게 될때
// 속성값이 없으면 에러를 뱉어준다.
const p1: Person = {
    name: 'mike',
    birthday: '1997-01-01',
}

const p2 = {
    name: 'mike',
    birthday: '1997-01-01',
}

// 이게 가능한 이유? p2가 더 크기 때문?
// p1은 age가 없어서 에러가 발생하게 되었는데
// age를 age: number | undefined로 변환하게 되면 에러가 발생할까? 에러 발생 X

const p3: Person = p2;

