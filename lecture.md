## enum키워드

enum에 어떠한 값도 입력하지 않으면 0번으로 자동 할당

```ts
enum Fruit {
  Apple,
  Banana = 5,
  Orange,
}

console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);
```

위 값의 결과값은 `0, 5, 6`

```js
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Fruit;
(function (Fruit) {
  Fruit[(Fruit['Apple'] = 0)] = 'Apple';
  Fruit[(Fruit['Banana'] = 5)] = 'Banana';
  Fruit[(Fruit['Orange'] = 6)] = 'Orange';
})(Fruit || (Fruit = {}));
console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);
```

위의 코드를 컴파일 한 결과이다.  
해당 내용들은 양방향 맵핑을 하게 된다  
**양방향 맵핑**이란?

```ts
console.log(Fruit.Banana);
console.log(Fruit['Banana']);
console.log(Fruit[5]);
```

라고 했을때 결과값이

> 5  
> 5  
> Banana

로 나오게 된다.

### 문자열로 하게 되는경우

```typescript
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Language;
(function (Language) {
  Language['Korean'] = 'ko';
  Language['English'] = 'en';
  Language['Japanese'] = 'jp';
})(Language || (Language = {}));
```

Fruit과 달리 단방향으로 맵핑되게 된다.

```ts
console.log(Language.Korean);
console.log(Language['Korean']);
console.log(Language['ko']);
```

# 위와 같은 경우에 Language['ko']는 에러를 발생하게 된다.

아래와 같은 함수를 정의 할 수 있다  
enum의 **값**인지 아닌지를 판별하는 함수

```ts
function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter((key) => isNaN(Number(key)))
    .some((key) => enumObject[key] == value);
}
```

filter를 하는 이유는 양방향인경우를 막기 위해서 처리한다.  
console.log(Fruit['Banana']);
이런식을

---

## const enum

enum같은 경우 일반적으로 object로 남게 되는데 이렇게 되면 불필요하게 커지는 경우가 발생하게 된다.  
const enum을 사용할 경우 오브젝트로 남지 않게 된다.  
번들 파일의 크기를 줄일 수 있다.

위에서 만든 getIsValidEnumValue에 const enum이기에 사용 할 수 없다는 에러가 표시된다.
