/*
while문
반복문
조건에 따라 프로그램의 일정 코드를 반복적으로 수행할 수 있도록 하는 구문
*/

// while
// 조건이 만족하는 동안 반복실행될 코드를 계속 실행
var count=0;
while(count<3){
    // 조건식이 만족하는 동안 반복실행될 코드를 계속 실행
    // 조건식을 만족하지 않는다면 while문은 그대로 종료 다음코드로 넘어감
    var choice=parseInt(prompt("메뉴 번호를 선택해주세요."));
    console.log(choice+"번 메뉴를 선택하셨습니다.")
    switch(choice){
        case 1:
            console.log("아메리카노는 1500원 입니다.");
            break;
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
    count++;
    // 증감 연산자를 사용해 반복문을 빠져나가게함
}


/*
반복문을 이용한 퀴즈 프로그램
*/ 
var x_count=0;
while(true){
    var answer;
    answer=parseInt(prompt("1+1=?"));

    if(answer!=2){
        console.log((++x_count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }

    answer=parseInt(prompt("7-1=?"));
    if(answer!=6){
        console.log((++x_count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }

    answer=parseInt(prompt("5-2=?"));
    if(answer!=3){
        console.log((++x_count)+"번 틀렸습니다. 다시 도전하세요.");
        continue;
    }

    break;

    // continue 문을 만나면 여기로 이동합니다. -> 남은 반복실행될 코드를 모두 skip시키고 반복문이 처음부터 다시 시작됨
}
// break 문을 만나면 여기로 이동합니다. -> 반복문을 빠져나옴

console.log("틀린 횟수: "+x_count)
console.log("참 잘했어요.")

