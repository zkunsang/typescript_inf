export { };

enum Fruit {
    Apple,
    Banana,
    Orange,
}

const FRUIT_PRICE = {
    [Fruit.Apple]: 1000,
    [Fruit.Banana]: 1500,
    [Fruit.Orange]: 2000,
}

const FRUIT_PRICE2: { [key in Fruit]: number } = {
    [Fruit.Apple]: 1,
    [Fruit.Banana]: 2,
    [Fruit.Orange]: 3,
}

// Orange2가 추가가 되면 Fruit클래스와 FRUIT_PRICE둘다 처리해 줘야한다.
// 이런걸 깜빡할 수 가 있음