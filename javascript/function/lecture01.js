// function

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
console.log(print("Hello function"));
// return 값이 없기 때문에 함수의 실행 결과는 undefined

// 예제 함수3
function sum(arg1, arg2){
    var result=arg1+arg2;
    // 인자들을 변수처럼 활용
    return result;
}
console.log(sum(1, 2));
// return 값인 3 출력
