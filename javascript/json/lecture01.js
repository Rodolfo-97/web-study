// Json
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);  //true

json = JSON.stringify(['apple', 'banana']);
console.log(json);  // ["apple","banana"]

const rabbit = {
    name:'tori',
    color:'white',
    size: null,
    birthDate: new Date(),

    // Symbol()은 jaon에 포함되지 않음.
    // Symbol: Symbol('id'),

    // 메서드는 json에 포함되지않음.
    jump: () => {
        console.log(`${name} can jump`)
    }
}
json = JSON.stringify(rabbit);
console.log(json); 
// {"name":"tori","color":"white","size":null,"birthDate":"2021-05-11T06:16:05.197Z"}

// 원하는 property만 골라 json으로 만들 수 있다.
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);  // {"name":"tori","color":"white"}

// 콜백 함수를 이용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'Rodolfo' : value;
})
console.log(json);


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
// {name: "tori", color: "white", size: null, birthDate: "2021-05-11T06:32:46.489Z"}
rabbit.jump();

// obj.jump(); -> 객체로 만들기 전 rabbit을 json으로 만들 때 rabbit의 method는 포함되지 않았기 때문에 raabit으로 만든 json을 다시 객체 obj로 만들 시 jump메서드는 없다. 

