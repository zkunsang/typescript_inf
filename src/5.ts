export {

}

// 인덱스 타입
interface Person {
    readonly name: string;
    age: number;
    [key: string]: string | number;
    // 인덱스 타입 값의 타입만 정의
    // 키값이 무자열인것의 value는 모두 string | number
    //그래서 hello '123'이 가능
}

const p1: Person = {
    name: 'mike',
    birthday: '1997-01-01',
    age: '25',
    hello: '123'
}

