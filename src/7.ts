export { }

interface YearPriceMap {
    [year: number]: number;
    [year: string]: string | number;
}

// number는 string or number에 할당이 가능하기 때문에 타입 에러가 발생하지 않음
interface YearPriceMap2 {
    [year: number]: number;
    [year: string]: string;
}
// number는 string에 할당 가능하지 않기 때문에 에러가 발생


const yearMap: YearPriceMap = {}
yearMap[1998] = 1000;
yearMap[1998] = 'abc';

yearMap['2000'] = 1234;
yearMap['2000'] = 'million'
