## 제네릭 
```ts
const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>('empty', 10);
const arr3 = makeArray(1, 123);
```

명시적으로 타입을 입력해 줄 수 있고  
생략해도 타입스크립트에서 자동으로 해준다.

## 제네릭 타입 제한

```ts
function identity<T extends number | string>(p1: T): T {
    return p1;
}

```

## 제네릭(keyof)
```ts
interface Person {
    name: string;
    age: number;
};

type T1 = keyof Person;

swapProperty(p1, p2, 'age');
const temp: T1 = 'age'
```

T1은 "name" | "age"