export { };

interface Person {
    name: string;
    age: number;
    language: string;
}

type Record<K extends string, T> = { [P in K]: T };
type T1 = Record<'p1' | 'p2', Person>;

T1 {
    p1: Person,
        p2: Person
}