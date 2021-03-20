## **this**란?
```ts
export { };

function getParam(this: string, index: number): string {
    const params = this.split(',');

    if (index < 0 || params.length <= index) {
        return '';
    }

    return this.split(',')[index];
}
```
파라미터 함수의 맨 앞에 this를 넣으면 this로 인식  
매개변수는 this 이후에만 적용이 된다.

```ts
function getParam(this: string, index: number): string {
    return '';
}

String.prototype.getParam = getParam;
```
위와 같이 String의 prototype에 새로운 함수를 넣어 줄려고 하는데 실패한다.
이럴때는

**interface**키워드를 사용한다.

```ts
function getParam(this: string, index: number): string {
    return '';
}

String.prototype.getParam = getParam;

interface String {
    getParam(this: string, index: number): string;
}
```


```ts
export { };

// add함수 작성하기
// 두 매개 변수가 모두 문자열이면 문자열을 반환한다.
// 두 매개 변수가 모두 숫자이면 숫자를 반환한다.
// 두 매개변수를 서로 다른 타입으로 입력하면 안된다.

function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        const result = Number(x) + Number(y);
        return result.toString();
    }
}

// 로직상으로는 정의가 되는데 타입으로는 처리가 안됨
// 그리고 아래 1, + '2'역시 에러 표시가 안됨

const v1: number = add(1, 2);
console.log(add(1, '2'));
```


```ts

//함수 오버로딩을 사용한다.
export { };

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        const result = Number(x) + Number(y);
        return result.toString();
    }
}

const v1: number = add(1, 2);
const v2: string = add('1', '2');
console.log(add(1, '2'));
```


```ts
export { }

// named parameter
function getText({
    name,
    age = 15,
    language,
}: {
    name: string;
    age?: number;
    language?: string
}): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`
}

getText({ name: 'aaa', age: 11 });
```
아래와 같이 interface로 뺄 수 있따.
```ts
export { };

interface Param {
    name: string;
    age?: number;
    language?: string;
}

function getText({ name, age = 15, language }: Param): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
```

## 네임드 코드 리팩토링하기
해당 function의 앞에 클릭을 하면 💡표시를 누르면 메뉴가 나옴
```ts
interface GetTextParam {
    name: string;
    age?: number;
    language?: string;
}

function getText({ name, age = 15, language }: GetTextParam)
    : string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';

    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}

```