/*
switch문
switch, case
조건에 따라 프로그램의 흐름을 분기해서 특정 코드가 실행되도록 함
*/

console.log("Menu를 선택해 주세요");
console.log("1. 아메리카노");
console.log("2. 카페라떼");
console.log("3. 카푸치노");
console.log("4. 에스프레소");

var choice=parseInt(prompt("메뉴 번호를 선택해주세요."));
// prompt 명령어로 입력값을 받은뒤 정수로 변환해준다.

switch(choice){
    case 1:
        console.log("아메리카노는 1500원 입니다.");
        break;
        /*
        break
        break구문을 만나면, switch-case 문의 마지막 중괄호(}) 밖으로 빠져나옴.
        break를 사용하지 않으면, switch문에서 빠져나오지 않고 다음 case에 해당하는 코드까지 실행됨.
        */
    case 2:
        console.log("카페라떼는 1800원 입니다. ");
        break;
    case 3:
        console.log("카푸치노는 2000원 입니다.")
        break;
    case 4:
        console.log("에스프레소는 1000원 입니다.");
        break;
    default:
        console.log("없는 메뉴입니다.");
        break;
}