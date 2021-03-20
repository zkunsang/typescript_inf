export { }
interface YearPriceMap {
    [year: number]: A;
    [year: string]: B;
}

// 할당 가능한지를 확인
// 키가 숫자이고
// 키가 문자열
// A는 B로 할당 가능해야함
// *** 속성 이름이 숫자인것은 내부적으로 문자열로 변환이 돼서 취급되기 때문
// A는 B로 할당 가능해야함