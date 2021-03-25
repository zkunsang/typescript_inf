export { };

interface Person {
    name: string;
    age: number;
}

type T1 = Person['name'];

type ReadOnly<T> = { readonly [p in keyof T]: T[p] };
type Partial<T> = { [p in keyof T]?: T[p] };

type T2 = Partial<Person>;
type T3 = Readonly<Person>;