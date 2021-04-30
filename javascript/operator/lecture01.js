// Arithematic operator(산술 연산자)


// 이항연산자 (binary operator)

// 두개의 피연산자(A, B)를 가지는 연산자. A 연산자 B 의 꼴로 사용함. 피연산자는 변수나 숫자가 될 수 있음.
var a=200;
var b=100;
// + 더하기
console.log(a+b);
// 300 출력

// - 빼기
console.log(a-b);
// 100 출력

// * 곱하기
console.log(a*b);
// 20000 출력

// / 나누기
console.log(a/b);
// 2 출력

// % 나머지
console.log(a%b);
// 0 출력


// 단항연산자 (unary operator)

// 하나의 피연산자(A)를 가지는 연산자. 보통 연산자A의 꼴로 사용함. 대표적으로 - 연산자가 있으며, -A의 꼴로 사용하는 경우 -는 이항 연산자가 아닌, 단항연산자임. A변수에 -1을 곱한 효과가 발생.
console.log(-a);
// -200 출력


// 증감연산자 (++, --)

// 표현식 안에서 변수의 값을 증가하거나 감소시킬 수 있음.

// 각각, A=A+1, A=A-1의 효과를 발생함. 연산자를 변수 앞에 사용한 경우와 변수 뒤에 사용한 경우에 따라 변수의 값을 업데이트 하는 순서가 바뀜.
var c=1;
console.log(c);
console.log(++c);
// 2 출력 -> 증감연산자를 먼저 처리한 뒤에 console.log()명령을 처리 
console.log(c);
// 2 출력

var d=1;
console.log(d)
console.log(d++)
// 1 출력 -> console.log() 명령이 먼저 처리된 뒤에 증감연산자를 처리
console.log(d)
// 2 출력