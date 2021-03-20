## 함수를 저장하는 경우

함수 리턴 X

```ts
export {};

const getText: (name: string, age: number) => string = function (name, age) {
  return 'hello';
};

const temp: string = getText('123', 4);
```

---

## 선택 매개 변수(optional parameter)

함수의 파라미터 오른쪽에 **?** 를 사용하게 되면 optional이 된다.  
undefined가능

매개변수가 많은 경우 비 구조화 문법을 이용해서 이름이 있는 **named parameters**를 정의 하는게 좋다.

```ts
function getText(name: string, age: number = 15, language = 'korean'): string {
  return '';
}

console.log(getText('mike'));
console.log(getText('mike', 23));
console.log(getText('mike', 36, 'english'));
```

language = 'korean'이라고 했을 때 자동으로 string으로 된다.  
그리고 기본 값으로 처리되고 있어서 자동으로 number와 language는 optional 파라미터가 된다.

---

## Rest parameters

```ts
function getText(name: string, ...rest: number[]): string {
  return '';
}
```
