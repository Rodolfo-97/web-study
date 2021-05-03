/* 
do while문
do, while
한번은 코드가 실행되고, 이후에 반복실행될지 말지를 결정
*/

var cond=false;
do{
    console.log("이 구문은 한번만 실행됩니다.")
}while(cond);
// 코드가 한번은 실행됨.


// do while 문을 이용한 퀴즈 프로그램
var count=-1;
do{
    var answer=parseInt(prompt("1+1=?"));
    count++
}while(answer!=2);
console.log("정답입니다");
console.log("틀린개수"+count);