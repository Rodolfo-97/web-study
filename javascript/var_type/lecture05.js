// Number

var height=prompt("키를 입력해 주세요.");
console.log(height, typeof(height));
// 숫자를 해도 height의 타입이 string으로 표현된다.
// prompt는 사용자로부터 입력받은 값은 문자열로 돌려준다.


// string 타입을 number 타입으로 변환하는 법.

// 정수로 변환
var height_int=parseInt(height);
console.log(height_int, typeof(height_int));

// 실수로 변환
var height_float=parseFloat(height);
console.log(height_float, typeof(height_float));

