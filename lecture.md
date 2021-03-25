## mapped type

mapped 타입이란 특정 inteface를 다른 함수에 잇는 녀석들을 **optional** or **readonly**형태로 변경 가능하게 함
```ts
export {};

interface Person {
    name: string;
    age: number;
}

interface PersonOptional {
    name?: string;
    age?: number;
}

interface PersonReadOnly {
    readonly name: string;
    readonly age: number;
}


```

## maaped type 
```ts
export { };

interface Person {
    name: string;
    age: number;
}

type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {}
pMap.name = true;
pMap.age = false;
pMap.age = undefined;
pMap.age = 1;
```
위와 같이 undefined | boolean형태로도 가능하다

## type

```ts

interface Person {
    name: string;
    age: number;
}

type T1 = Person['name'];
```

T1 은 string형식

```ts
type ReadOnly<T> = { readonly [p in keyof T]: T[p] };
type Partial<T> = { [p in keyof T]?: T[p] };
```
type name = Person[name];  
type age = Person[age];  

name과 age의 타입은 그대로이고 readonly만 붙이게 된다  
name과 age의 타입은 그대로이고 optional만 붙이게 된다.

Readonly와 Partial은 타입스크립트 내장 타입


## Pick
```ts
export { };

type Pick<T, K extends keyof T> = { [p in K]: T[p] };

interface Person {
    name: string;
    age: number;
    language: string;
}

type T1 = Pick<Person, 'name' | 'language'>;

const temp: T1 = { name: '123', language: 'kr' }
```

T1은 **Pick**한 Person의 'name', 'language'를 가지는 type을 만든다.

## Record
```ts
type Record<K extends string, T> = { [P in K]: T };
type T1 = Record<'p1' | 'p2', Person>;

```

T1의 타입은   
T1 {
    p1: Person,
    p2: Person
}

## 맵드 타입의 효용성
이넘타입의 활용도를 높일 수 있다.
```ts
enum Fruit {
    Apple,
    Banana,
    Orange,
}

const FRUIT_PRICE2: { [key in Fruit]: number } = {
    [Fruit.Apple]: 1,
    [Fruit.Banana]: 2,
    [Fruit.Orange]: 3,
}

// Orange2가 추가가 되면 Fruit클래스와 FRUIT_PRICE둘다 처리해 줘야한다.
// 이런걸 깜빡할 수 가 있음
```

맵드 타입으로 지정하면 enum에 추가가 되게 되면 FRUIT_PRICE가 에러가 발생하게 됨