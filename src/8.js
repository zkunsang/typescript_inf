"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] == value; });
}
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Bananna"] = 1] = "Bananna";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
console.log('1 in Fruit: ', getIsValidEnumValue(Fruit, 1));
console.log('5 in Fruit: ', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit: ', getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Fruit: ', getIsValidEnumValue(Language, 'ko'));
console.log('Korean in Fruit: ', getIsValidEnumValue(Language, 'Korean'));
