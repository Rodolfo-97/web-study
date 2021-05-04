/*
변수의 scope
선언한 변수가 유효한 영역
*/

//  function scope
// 선언된 변수는 선언된 함수 안에서 접근 가능
// 선언된 함수 안에서 선언된 함수 (nested function)에서도 접근 가능


function a(){
    var v_a="a";

    function b(){
        var v_b="b";
        
        console.log("b :",typeof(v), typeof(v_a), typeof(v_b));
        // b : string string string 출력
    }

    b();
    console.log("a :",typeof(v), typeof(v_a), typeof(v_b));
    // a : undefined string undefined
}
var v ="v";

a();

console.log("o :",typeof(v), typeof(v_a), typeof(v_b));
// string undefined undefined