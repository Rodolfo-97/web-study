// Object(객체)
// 객체는 property(속성)의 집합
// number, string, boolean의 단순 자료형보다 더 복잡한 자료를 표현할 때 사용


var empty_obj={};
console.log(typeof(empty_obj));

var man={
    name:"홍길동",
    age:20,
    height:180
    // 객체 man의 속성들
}
// 각각의 속성은 name:value 형식으로 표현


// 객체의 속성에 접근 방법 2가지

// 1번째: 객체이름.속성이름
console.log(man.name);
console.log(man.height);
console.log(man.age);

// 2번째: 객체이름[속성이름] -> 속성 이름이 문자열일 경우 ""를 적어주어야함.
console.log(man["name"]);
console.log(man["height"]);
console.log(man["age"]);

// 속성값을 따로 수정 해줄 수도 있다.
man.name="이몽룡"
man.age=15;
console.log(man);
// name: "이몽룡", age: 15, height: 180 출력