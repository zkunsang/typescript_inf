export { }

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
