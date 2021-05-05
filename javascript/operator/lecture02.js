// 관계연산자


// 1. 관계연산자(Relational operator)
// 두 표현식(A, B)의 관계를 비교하는 이항연산자. 관계에 따라 boolean 타입의 true, false로 표현됨.
var a=1, b=2, c=3, d=4;
var e="a", f="b", g="c", h="d";
// String 타입의 대소연산은 사전순으로 비교함

// 대소 비교
console.log(a<b);
// true
console.log(a>b);
// false
console.log(a<=b);
// true
console.log(a>=b);
// false

// A == B 는 값이 같으면 true 다르면 false
console.log(a==b);
// false

// A != B  ->  A와 B의 값이 다르면 true 같으면 false
console.log(a!=b);
// true


// 2. Logical operator(논리연산자)
// 두 boolean 피연산자에 대해 연산하는 연산자.

// A. AND(&&) 연산자
// 두 피연산자가 모두 true인 경우에만 true를 나타내는 이항연산자
// 피연산자가 하나라도 false이면 && 연산자의 값은 false 이기 때문에 가벼운 피연산자부터 먼저 적어준다.
var height=180;
var age=20;
console.log(height>=180 && age>=20)
// true

var height=170;
console.log(height>=180 && age>=20)
// false

// B. OR(||) 연산자
// 두 피연산자가 하나라도 true인 경우 true를 나타내는 이항연산자
// || 연산자는 제일 앞의 피연산자가 true이면 뒤의 피연산자는 무시하기 때문에 사용할 때는 가벼운 피연산자부터 먼저 적어준다.
console.log(height>=180 || age>=20)
// true

// C. ! (not) 연산자
console.log(!true);  // false


// 3. 연산자 우선순위

// A. 우선순위 순으로 정리한 연산자

// 1. ++, --
// 2. !
// 3. *, /, %
// 4. +, -
// 5. <, <=, >, >=
// 6. ==, !=
// 7. &&
// 8. ||

// B. 괄호

// 우선순위를 명시하기 위해 괄호를 사용. 괄호안의 계산식이 먼저 계산됨.
// 부가적 효과
// 코드의 가독성 향상
// 연산자 우선순위 실수 방지


// 4. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// type이 달라도 알맹이(여가서는 5)가 같으면 같다고 봄
console.log(stringFive==numberFive);  // true
console.log(stringFive!=numberFive);  // false

// === strict equality, no type conversion
// type이 다르면 알맹이가 같아도 다르다고 봄
console.log(stringFive===numberFive);  // false
console.log(stringFive!==numberFive);  // true

// object equality by reference
const ellie1={name:'ellie'};
const ellie2={name:'ellie'};
const ellie3=ellie1;

console.log(ellie1==ellie2); 
// 각각 다른 ref를 가르키기 때문에 false 출력
console.log(ellie1===ellie2);
// 똑같은 type이은 아니든 각각 다른 ref를 가르키기 때문에 false 출력
console.log(ellie1===ellie3);  // true 
// 같은 ref를 가르킴
