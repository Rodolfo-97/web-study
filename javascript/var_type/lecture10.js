// symbol
// 고유한 식별자가 필요할 때 사용

const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1==symbol2)  // false -> Symbol의 문자열이 같아도 다른 식별자로 인식함

const gsymbol1=Symbol.for('id');
const gsymbol2=Symbol.for('id');
console.log(gsymbol1==gsymbol2)  // true -> 동일한 식별자로 간주
