export { };


type StringPropertyNames<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T]

interface Person {
    name: string;
    age: number;
    nation: string;
}



type T1 = StringPropertyNames<Person>;

type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T2 = StringProperties<Person>