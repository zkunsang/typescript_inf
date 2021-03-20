## 타입

code runner 실행이 안되요  
settings > executorMap > node_modules/.bin/ts-node

종전 강의에서
`npm install ts-node`를 설치 하지 않았다

```zsh
> npm install ts-node
```

---

```ts
console.log('typeof undefined =>', typeof undefined);
console.log('typeof null =>', typeof null);
```

위의 결과값은?

> typeof undefined => undefined  
> typeof null => object

javascript에서 undefined라는 타입이 있지만  
null은 **object**이다

---

typescript에서는 문자열과 숫자 릴터럴 형식 역시 타입으로 정의 할 수 있다.

---

## any타입(any)

any라는 타입은 기존 javascript라고 생각해도 괜찮다.  
any 타입 남발은 X

---

## 함수의 반환형(void, never)

void: 아무것도 반환하지 않음  
never: 무한 루프를 돌거나 익셉션을 처리 해야 할때  
never는 거의 사용 X

---

## 객체 정보(object)

```typescript
let v: object;
v = { name: 'abc' };
// console.log(v.prop1);
// console.log(v.name);
```

을 했을때 prop1에 대한 정보 name에 대한 정보 역시 없어서 에러 표시가 나게 된다.  
인터페이스를 사용

---

## 유니온 타입과 인터섹션(union, intersection)

```ts
let v1: (1 | 3 | 5) & (3 | 5 | 7);
```

## 타입 키보드를 이용해서 타입에 별칭을 줄 수 있음(type)

```ts
type Width = number | string;
let width: Width;
```
