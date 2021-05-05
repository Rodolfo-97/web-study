// String
var a='문자열은 따옴표로 둘러싸면 됩니다.';
var b="큰따옴표로도 문자열을 표현할 수 있습니다.";

var c="큰따옴표 문자열에는 따옴표 '를 사용할 수 있습니다.";
var d='따옴표 문자열에는 큰따옴표 "를 사용할 수 있습니다.';
// "로 시작하면 끝날때도 "를 찾는다. '도 마찬가지.


// escape character
var e="따옴표를 쓰고 싶다면 \'이렇게\' 사용하면 됩니다. 마찬가지로 \"큰따옴표\"도 쓸 수 있습니다.";
var f='따옴표를 쓰고 싶다면 \'이렇게\' 사용하면 됩니다. 마찬가지로 \"큰따옴표\"도 쓸 수 있습니다.';

var g="\\ 문자를 쓰고 싶다면 역슬래시를 두번 씁니다.";


// New line character
var h="문자열에서 줄바꿈을 하고 싶다면,\n역슬래시n을 사용합니다.";

var i=a+b;

var j="abcde";

// 문자열의 길이 구하기 
var str="Hello";
console.log(str.length);
// 5 출력
console.log(str["length"]);
// 5 출력


// 문자열 붙이기

// 1. concat 함수 사용
var str2=" World";
console.log(str.concat(str2));
// Hello World 출력

// 연속으로 3개를 이어 붙일 수 있음
console.log(str.concat(str2).concat("!"))
// Hello World! 출력

// 2. + 연산자 사용
console.log(str+str2+"!");
// Hello World! 출력

// 3. ``사용
console.log(`hello${str2}`)


// 특정위치의 문자열 알아내기

// 1. charAt 명령어 사용
var str3="abcdeabcde"
console.log(str3.charAt(0));
// a 출력

// 2.[n] 사용
console.log(str3[0]);
// a 출력


// 부분 문자열 구하기

// 1. substring(pos1, pos2) : pos1 에서 pos2 전 까지의 부분 문자열 반환
console.log(str3.substring(2,4));
// cd 출력 -> 2번째 문자부터 4번째 전까지의 문자

// pos2 생략시 pos1에서부터 마지막 까지의 문자열 반환
console.log(str3.substring(2));
// cdeabcde 출력

// 2. substr(pos, length) : pos에서 length길이 만큼의 부분 문자열 반환.
console.log(str3.substr(2,4))
// cdef 출력 -> 2번째 문자부터 길이가 4인 문자열

// length 생략시, pos에서 마지막까지의 문자열 반환
console.log(str3.substr(2));
// cdeabcde 출력


// 문자열 검색하기

// 1. indexOf("찾을 문자")
// 문자가 반복되는 경우 처음 나오는 해당 문자의 위치
console.log(str3.indexOf("ab"));
// 0 출력

// 2. lastIndexOf("찾을 문자") 
// 문자가 반복되는 경우 마지막에 나오는 해당 문자의 위치
console.log(str3.lastIndexOf("ab"))
// 5 출력