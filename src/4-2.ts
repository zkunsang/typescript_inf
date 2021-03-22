export { };

interface Person {
    name: string;
}

interface Product {
    name: string;
    age: number;
}

const obj = { name: 'mike', age: '23', city: 'abc' }

let person: Person = obj;
let product: Product = obj;

// 속성이 많아질수록 더 많은 제약이 생기는것( Person 보다는 Product가 제약이 더 많음)