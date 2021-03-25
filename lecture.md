## mapped type

mapped 타입이란 특정 inteface를 다른 함수에 잇는 녀석들을 **optional** or **readonly**형태로 변경 가능하게 함
```ts
export {};

type IsStringType<T> = T extends string ? 'yes': 'no';

type T1 = IsStringType<string>;
type T2 = IsStringType<number>;
```

삼항연산자의 'yes' 'no'가 값이 아니라 타입이다.  
`const test: T1 = 'yes'`  
이런식으로 값을 넣어야 한다


## 조건부 타입
```ts
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
```

##
```ts
// 만약 [keyof T]가 없다고 가정하면
type StringPropertyNames<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}

interface Person {
    name: string;
    age: number;
    nation: string;
}
type T1 = StringPropertyNames<Person>

```
`위와 같은 형태이면  T1은 {name: 'name', age: never, nation: 'nation'}이 된다.`

```ts
type StringPropertyNames<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
} [key of T];
```
를 하게 되면 값의 타입을 뽑아낸다
```ts
type T3 = Person2['name' | 'nation' | never];

```
위에 내용을 풀어서 쓰면  
따라서 T3 name | nation이 됨

```ts
type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T2 = StringProperties<Person>
```
T2는 {name: string, nation: string}