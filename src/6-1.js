class Counter3 {
  value = 0;
  add = (amount) => {
    this.value += amount
  }

  add2(amount) {
    this.value += amount
  }
}

function Counter() {
  this.value = 0;
  this.add = amount => {
    this.value += amount;
  }
}

const counter = new Counter();
console.log(counter.value);
counter.add(5);
console.log(counter.value);

const add1 = counter.add;
add1(5);
console.log(counter.value);

function Counter2() {
  this.value = 0;
  this.add = function (amount) {
    this.value += amount;
    console.log(this === global);
  }
}

const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5);
console.log(counter2.value);

const add2 = counter2.add;
add2(5);
console.log(counter2.value);

const counter4 = {
  value: 0,
  add: function (amount) {
    this.value += amount
  }
}


console.log(counter4.value);
counter4.add(5);
console.log(counter4.value);
const add4 = counter4.add;
add4(5);
console.log(counter4.value);

const counter5 = {
  value: 0,
  add: (amount) => {
    this.value += amount
  }
}


console.log(counter5.value);
counter5.add(5);
console.log(counter5.value);
const add4 = counter5.add;
add4(5);
console.log(counter5.value);