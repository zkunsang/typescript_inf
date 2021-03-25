export { };

type Pick<T, K extends keyof T> = { [p in K]: T[p] };

interface Person {
    name: string;
    age: number;
    language: string;
}

type T1 = Pick<Person, 'name' | 'language'>;

const temp: T1 = { name: '123', language: 'kr' }