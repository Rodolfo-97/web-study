'use strick';

// 1. Variable

// let (added in ES6)
let name="Rodolfo";
console.log(name); // Rodolfo 
name="hello"
console.log(name); // hello

// age2=4;
// let age;  // error
// let은 선언하기 전에 값이 초기화되면 에러가 뜨기 때문에 정상적이다.

// var (don't ever use this!)
// 1. var 를 쓰면 선언하기도 전에 값을 초기화 시킬 수 있기 때문에 비정상적임.
// 2. var hoisting (변수를 선언한 위치와 상관없이 제일 위로 선언을 끌어올려주는 것)
// 3. 변수의 block scope를 무시한다.
console.log(age)  // undefined
age=4;
var age;


// 2. Constants
// 값을 할당한 뒤로는 변경할 수 없다.
// 장점
    // 보안성
    // thread safety
    // 사람의 실수 방지
// 변경되지 않는 변수들은 Constants를 사용해 주자!
const daysInWeek=7;
const maxNumber=5;
 