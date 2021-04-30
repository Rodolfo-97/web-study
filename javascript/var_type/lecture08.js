// undefined, null 타입


// undefined
// 시스템에서 어떤 변수나 속성이 정의되지 않은 경우를 표현하기 위해 사용

// 1번째: 선언만 하고 초기화가 되지 않는 변수의 타입이나 값
var uninitialized_var;
console.log(uninitialized_var);
// undefined 출력
console.log(typeof(uninitialized_var));
// undefined 출력

// 2번째: 객체의 정의되지 않은 속성의 타입이나 값
var obj={
    x:1,
    y:2
};
console.log(typeof(uninitialized_var));
// undefined 출력
console.log(obj.c);
// undefined 출력


// null
// 개발자가 명시적, 의도적으로 아무것도 없는 비어있는 상태를 나타낼 때 사용
// typeof의 결과는 object이며 값은 null

var null_var;
null_var=null;
console.log(null_var, typeof(null_var));
// 변수의 값은 null 타입은"object"로 출력
// 즉 null이라는 빈 객체가 저장 되어있다는 뜻