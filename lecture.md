## this

일반 함수의 this는 이 함수를 호출한 주체를 의미

```ts
function Counter2() {
  this.value = 0;
  this.add = function (amount) {
    this.value += amount;
    console.log(this === global);
  };
}

const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5);
console.log(counter2.value);

const add2 = counter2.add;
add2(5);
console.log(counter2.value);
```

의 결과는?

> 0  
> false  
> 5  
> true  
> 5

---

화살표 함수의 this는 이 화살표 함수가 생성 될 당시의 this를 가리킴(**정적**)  
일반함수는 (**동적**)
add 함수를 누가 호출하냐는 전혀 상관이 없게 됨

---

```ts
class Counter3 {
  value = 0;
  add = (amount) => {
    this.value += amount;
  };

  add2(amount) {
    this.value += amount;
  }
}
```

add와 add2는 다르다.

---

```ts
const counter4 = {
  value: 0,
  add: function (amount) {
    this.value += amount;
  },
};

console.log(counter4.value);
counter4.add(5);
console.log(counter4.value);
const add4 = counter4.add;
add4(5);
console.log(counter4.value);
```

의 결과 값은?

> 0  
> 5  
> 5

```ts
const counter5 = {
  value: 0,
  add: (amount) => {
    this.value += amount;
  },
};

console.log(counter5.value);
counter5.add(5);
console.log(counter5.value);
const add4 = counter5.add;
add4(5);
console.log(counter5.value);
```

> 0  
> 0  
> 0

감싸고 있는 일반 함수가 없기때문에 항상 global을 가지고 있게 된다.
counter5의 밸류를 가리키는게 아니기에 항상 0이 된다.
