export { };

interface Person {
    name: string;
    age: number;
}

interface Programmer {
    favoriteProgrammingLanguage: string;
}

interface Korean extends Person, Programmer {
    isLiveInSeoul: boolean
}

class SomePeople implements Korean {
    age: number;
    name: string;
    favoriteProgrammingLanguage: string
    isLiveInSeoul: boolean

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
        this.favoriteProgrammingLanguage = 'lang'
        this.isLiveInSeoul = false
    }

}