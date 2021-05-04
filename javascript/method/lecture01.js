/*
method

객체 속성의 값으로서 함수가 들어가면 그 함수를 객체의 method라 한다.
*/

function f(){
    console.log(this)
    // 함수 f 가 불렸을 때 어떤 객체에 바인드된 속성으로서 불렸는지를 알 수 있음
    // f(); -> window(전역객체)에 바인드됨
    // o.method(); -> 객체o에 바인드됨
    console.log("f is called")
}

function setName(name){
    this.name=name;
}

var o={
    name:"object",
    method: f,
    setName:setName
}

var o2={
    name:"",
    setName:setName
}

f();  // f is called
o.method();  // f is called

o.setName("object1");
o2.setName("object2");

console.log(o, o2);