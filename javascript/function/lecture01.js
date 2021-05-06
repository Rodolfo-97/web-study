// function
// 함수의 이름은 동사로
// 하나의 함수는 한 가지 일
// js에서 function은 object이기 때문에 변수에 할당할 수 있을 뿐만 아니라 parameter에 줄 수 있고 return값이 될 수도 있음.

// 함수의 정의
function 함수이름(인자1, 인자2){
    // 실행할 코드 -> 인자들을 변수처럼 활용 가능
    return 결과값;
    // 결과값 반환
    // 결과값 생략 가능
    // return 구문에서 함수가 종료
}

// 예제 함수1
function return_test(){
    return;
    console.log("실행되지 않는 코드");
}
console.log(return_test());
// return값이 없기 때문에 undefined 출력
// return 구문에서 함수가 종료 되기 때문에 뒤의 코드는 죽은 코드

// 예제 함수2
function print(message){
    console.log("print function in");
    console.log(message);
    console.log("print function out")
}
print(1234);  // 1234 출력
print('hello')  // hello 출력

// 예제 함수3
function sum(arg1, arg2){
    var result=arg1+arg2;
    // 인자들을 변수처럼 활용
    return result;
}
console.log(sum(1, 2));
// return 값인 3 출력

// 예제 함수4 -> default 값
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('Hi')  // 두 번째 인자를 주지 않으면 unknown 출력

// 예제함수5 -> Restparameters
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i])
    }
} 
printAll(1,2,3,4,5)
// 1,2,3,4,5 출력

// Early return, early exit
// bad
function upgradeUser(user){
    if(user.print>10){
        // long logic......
    }
}

// good
function upgradeUser(user){
    if(user.print<=10){
        return;
    }
    // long logic......
}

// Function expression
// Function expression 변수에 할당된 다음부터 호출이 가능하고 Function declaration은 hoist가 되기 때문에 함수가 선언되기 전에도 호출이 가능하다는 차이가 있음.

const print=function(){
    // anonymous function
    console.log('print')
}
