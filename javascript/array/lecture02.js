'use strict'

// Array
// 왠만하면 같은 데이터 타입으로 배열을 만드는 것이 좋다.

// 1. Declaration

// a. new 키워드를 사용해 object를 만드는 것처럼 배열을 선언하는 방법
const arr1 = new Array();
// b. [] 이용하는 방법
const arr2 = [1,2];


// 2. Index position
const fruits = ['Apple','Banana'];
console.log(fruits);
console.log(fruits.length);  // 2
// index로 특정 순서의 값 접근
console.log(fruits[0]);  // Apple
console.log(fruits[1]);  // Banana
console.log(fruits[2]);  // undefined
// 배열의 마지막 값을 찾을 때는 아래와 같이 적어서 코드만 보고 마지막 값인걸 쉽게 알 수 있도록 하자.
console.log(fruits[fruits.length-1]);  // Banana


// 3. Looping over an array
// print all fruits

// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits){
    console.log(fruit);
}
// c. forEach
// 배열안의 값마다 내가 전달한 함수 출력
fruits.forEach((fruit, index)=>console.log(fruit, index));


// 4. Addtion, deletion, copy
// push(); -> add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);  // ["Apple", "Banana", "strawberry", "peach"]

// pop(); -> remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);  // ["Apple", "Banana", "strawberry"]

// unshift() -> add an item to the beginning
fruits.unshift('strawberry', 'lemon');  // ["strawberry", "lemon", "Apple", "Banana"]
console.log(fruits);

// shift() -> remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);  // ["Apple", "Banana"]

// important note!! -> shift와 unshift는 pop과 push보다 훨씬 느리다기 때문에 가능하면 pop과 push를 사용하자 
// 앞에서부터 값을 빼거나 넣으면 뒤에 있는 값들도 index 위치를 옮겨 주어야 하기 때문에 시간이 더 많이 걸리기 때문이다.

// splice(index번호, 몇개의 index를 지울 것인지) -> remove an item by index position 
fruits.push('strawberry','peach','lemon');
console.log(fruits);  // ["Apple", "Banana", "strawberry", "peach", "lemon"]
fruits.splice(1,1);  // 삭제된 ['Banana']가 리턴
console.log(fruits);  // ["Apple", "strawberry", "peach", "lemon"]

// 지우려는 개수를 적지 않은 경우 -> 적은 index부터 뒤의 index를 전부 지운다.
// fruits.splice(1);  // ["Apple"] 
// console.log(fruits);

// 원하는 값을 넣을 수도 있음
fruits.splice(1, 1, 'dori', 'dori');  // ["Apple", "dori", "dori", "peach", "lemon"]
console.log(fruits);

// combine two arrays
const fruits2 = ['Banana', 'Banana'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);  // ["Apple", "dori", "dori", "peach", "lemon", "Banana", "Banana"]


// 5. Searching
// indexOf() -> find the index
console.log(fruits.indexOf('Apple'))  // 0
console.log(fruits.indexOf('Coconut'))  // -1

// includes()를 이용한 유무 확인
console.log(fruits.includes('Apple'))  // true
console.log(fruits.includes('Coconut'))  // false

// lastIndexOf -> 배열의 값이 중복될 경우 마지막에 있는 값의 index를 출력한다.
console.log(fruits);
fruits.push('Apple');
console.log(fruits.lastIndexOf('Apple'));  // 5

