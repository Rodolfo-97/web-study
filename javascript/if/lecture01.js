/*
if문
조건문
조건에 따라 프로그램의 흐름을 분기해서 특정 코드가 실행되도록 함
*/

// if문
if(true){
    // 조건식이 참이므로 중괄호 안의 코드 실행
    console.log("이 구문은 실행됨");
}

if(false){
    // 조건식이 거짓이므로 중괄호 안의 코드 실행X
    console.log("이 구문은 실행되지 않음");
}


// if else문
// 조건식이 참일 경우 if문 실행
// if문의 조건식이 거짓이여서 if문이 실행되지 않을 경우 else 구문 안의 코드 실행
if(false){
    console.log("1");
}
else{
    console.log("2");
}


// else if문
if(false){
    // if문의 조건식이 참일 경우 실행될 코드
    console.log("1");
}
else if(false){
    // if문의 조건식이 거짓이고 이 else if문의 조건식이 참일 경우 실행될 코드
    console.log("2");
}
else if(true){
    // if문, 첫번째 else if문 의 조건식이 거짓이고 이 else if문의 조건식이 참일 경우 실행될 코드
    console.log("3");
}
else{
    // 모든 if문 else if문이 실행되지 않았을 때 실행될 코드
    console.log("4");
}
