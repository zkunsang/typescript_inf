export { };

// add함수 작성하기
// 두 매개 변수가 모두 문자열이면 문자열을 반환한다.
// 두 매개 변수가 모두 숫자이면 숫자를 반환한다.
// 두 매개변수를 서로 다른 타입으로 입력하면 안된다.

function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        const result = Number(x) + Number(y);
        return result.toString();
    }
}

// 로직상으로는 정의가 되는데 타입으로는 처리가 안됨
// 그리고 아래 1, + '2'역시 에러 표시가 안됨

const v1: number = add(1, 2);
console.log(add(1, '2'));