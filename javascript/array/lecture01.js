// 배열(Array)
// 여러개의 변수를 저장하는 것
// index라는 주소를 이용해 배열안의 값들을 호출 할수있음


// 배열 만들기
var arr=[];
var arr2=[1,2,3,4,5];
var mixed_arr=[1, true, 3.14, "string", {name:"object"}, [1,2,3]]
console.log(mixed_arr);
// 배열 안에는 어떠한 자료형 타입이던지 모두 올 수 있음 -> 배열은 물론이고 객체도 올 수 있음.

// 배열의 길이 알아내기
console.log(mixed_arr.length);
// 6 출력 -> 문자열의 길이와 마찬가지로 length 사용

// 배열안의 특정 변수 출력하기
console.log(mixed_arr[0]);
console.log(mixed_arr[3]);
console.log(mixed_arr[5]);


// 배열 활용하기


// 배열에 엘리먼트 추가/삭제하기

// 기본적으로 배열의 앞과 뒤에서 엘리먼트를 추가하거나 삭제할 수 있음.
// .push(element) : 배열의 뒤에 element 추가
var arr5=[3,4,5,6];
console.log(arr5.push(7));  // 추가된 배열의 길이인 5 출력
console.log(arr5)  // [3,4,5,6,7] 출력

// .pop() : 배열의 뒤에서 엘리먼트 삭제하고 삭제한 엘리먼트를 리턴
var arr3=[1,2,3,4,5];
console.log(arr3.pop());   // 5 출력
console.log(arr3);  // [1,2,3,4] 촐력

// .shift() : 배열의 앞에서 엘리먼트 삭제하고 삭제한 엘리먼트를 리턴
var arr4=[2,3,4,5,6];
console.log(arr4.shift());  // 2 출력
console.log(arr4);  // [3,4,5,6] 출력

// .unshift(element) : 배열의 앞에 element 추가
var arr6=[9,8,7,6,5];
console.log(arr6.unshift(10));  // 추가된 배열의 길이인 6 출력
console.log(arr6);

// 배열 순서 뒤집기
console.log(arr6.reverse());  // [5,6,7,8,9,10]

// 배열 붙이기
var arr7=[1,2,3];
var arr8=[4,5,6];
console.log(arr7.concat(arr8));  // [1,2,3,4,5,6]

// 배열 검색하기
var arr9=[1,2,3,1,2,3];
console.log(arr9.indexOf(2));  // 1 제일 처음의 2의 위치를 찾음
console.log(arr9.lastIndexOf(2)); // 4 제일 마지막의 2의 위치를 찾음.


// 문자열 split 함수
// 문자열을 구분자(separator)로 나눠서 각각을 담은 배열을 반환하는 함수
var str="1,2,3,4,5";
console.log(str.split(","));  // ["1","2","3","4","5"] -> 여기서의 구분자인 ,을 기준으로 나눠져 각각의 요소를 가진 배열이 출력된다. 