/*
for in문
객체의 각 엘리먼트에 접근할 수 있는 반복문.
*/

// 객체의 속성들을 출력하는 동일한 코드


var obj={
    name:"object",
    weight:30,
    isObject:true,
    arr:[1,2,3],
    obj:{property:1},
};

// 1. for문과 Object.keys(); 함수 사용하기
var property_list=Object.keys(obj);
console.log(property_list)  // ["name", "weight", "isObject", "arr", "obj"] -> obj 객체의 속성의 name들이 배열로 출력
for(var i=0; i<property_list.length; i++){
    var property_name=property_list[i];
    console.log(property_name,":",obj[property_name])
}

// 2. for in 구문을 시용하기
for(var propertyName in obj){
    // 따로 초기화 코드나 업데이트 코드가 없음
    // in 앞에 있는 변수에 in 뒤에 있는 객체 속성의 name을 하나씩 순차적으로 넣어준다.
    console.log("\t", propertyName,":",obj[propertyName]);
}


// 배열에서의 for in 구문
var array=[4,2,3,0,5];
for(var arrayIndex in array){
    // 변수 arratIndex에 배열array의 index가 순차적으로 넣어준다. 
    console.log(array[arrayIndex]);
} 
