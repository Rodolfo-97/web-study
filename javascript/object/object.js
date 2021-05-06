// Object
// one of the Javascript's data type.
// a collection of related data and/or functionality.
//  Nearly all objects in Javascripts are instances of Objects
// object = {key:value}; -> object는 우리가 접근할 수 있는 변수(property)와 그 property가 가지고 있는 값(value)로 이루어진다.


// 1. Literals and properties
// {} 를 사용해 object를 만드는 방법 -> 'object literal' syntax
const obj1={}; 
// class 와 new생성자를 이용해 object를 만드는 방법. -> 'object constructor' syntax
const obj2=new Object();

const name='Rodolfo';
const age=25;
// object로 위를 간단히 표현할 수 있음
const rodolfo={
    name:'Rodolfo',
    age:25
}

function print(person){
    console.log(person.name);
    console.log(person.age);
}
print(rodolfo);

rodolfo.hasjob=true;
// Javascript는 동적으로 프로그램이 실행될 때 타입이 정해지기 때문에 object의 정의가 끝난 뒤에도 property를 추가할 수 있다.
// 그러나 후에 유지보수가 어렵기 때문에 피해주자.
console.log(rodolfo.hasjob);  // true

// object 정의 이후 삭제도 가능
delete rodolfo.hasjob;
console.log(rodolfo.hasjob);  // undefined


// 2. Computed properties 
// key should be always string type -> ''
console.log(rodolfo.name);  // Rodolfo
console.log(rodolfo['name'])  // Rodolfo


// 3. Property value shorthand
const person1={
    name:'bob',
    age:4
}
const person2={
    name:'steve',
    age:4
}
const person3={
    name:'dave',
    age:4
}

// 4. 객체를 더 쉽게 추가하는 방법 -> Constructor Function
function Person(name, age){
    // 순수하게 object만 생성하는 함수들은 보통 첫글자에 대문자를 사용한다.
    // this={}; 가 생략되어 있음
        this.name=name;
        this.age=age;
    // return this; 가 생략되어 있음
}
const person4=new Person('Rodolfo', 25);
// 클래스에서 object를 만드는 것처럼 객체를 생성
console.log(person4)


// 4. in operator: property existence check (key in obj)
// 해당하는 object안에 key가 있는지 없는지 확인 가능
console.log('name' in rodolfo);  // true
console.log('age' in rodolfo);  // true
console.log('ramdom' in rodolfo)  // false


// 6. for..in vs for..of

// for (key in obj)
for(key in rodolfo){
    console.log(key);
    // 변수 key에 차례대로 object의 property의 key들이 할당된다.
}

// for (value of iterable)
const array=[1,2,3,4,5];
for(value of array){
    console.log(value);
    // 배열에 있는 값을 순차적으로 출력
}


// 7. cloning
// Object.assign(dest,[obj1, obj2, obj3...])
const user={
    name:'Rodolfo',
    age:25
}
const user2=user;  
user2.name='coder';
// user2는 user가 가르키는 ref와 같은 ref를 가르킨다.
console.log(user);  // {name: "coder", age: 25}

// old way
const user3={};
for(key in user){
    user3[key]=user[key];
}
console.log(user3);  // {name: "coder", age: 25}

// new way -> Object.assign
const user4={};
Object.assign(user4, user);
console.log(user4);  // {name: "coder", age: 25}

// another example
const fruit1={
    color:'red'
}
const fruit2={
    color:'blue',
    size:'big'
}
const mixed=Object.assign({}, fruit1, fruit2);
// 앞의 객체에 동일한 property가 있다면 뒤에 위치한 fruit2 객체의 property가으로 덮어진다.
console.log(mixed);  // {color: "blue", size: "big"}