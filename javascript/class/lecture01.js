'use strict';

// 객체 지향 프로그래밍
// class: template(붕어빵 틀)
// object: instance of a class(클래스로 만든 붕어빵)
// JavaScript classes
//      - introduced in ES6


// 1. Class declarations
class Person {
    // constructor(생성자) -> object를 만들 때 필요한 데이터 전달
    constructor(name,age){
        // fields
        this.name=name;
        this.age=age;
        // fields 전달 받은 데이터를 할당
    }
    // methods
    speak(){
        console.log(`${this.name}: hello!`)
        // this는 생성된 object를 말함
    }
}

// 클래스를 이용해 객체를 생성
const Rodolfo=new Person('Rodolfo', 25);
console.log(Rodolfo.name);  // Rodolfo 출력
console.log(Rodolfo.age);  // age 출력
// method 호출
Rodolfo.speak();


// 2. Getter and setters 
class User {
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;

        this.age=age;
        // getter를 정의하는 순간 위의 this.age는 메모리에 올라간 데이터를 읽어오는 것이 아니라 바로 getter를 호출함.
        // setter를 정의하는 순간 this.age=age;의 =age; 즉 value를 할당할 때 바로 메모리에 값을 할당하는 것이 아니라 setter를 호출하게 됨 -> setter 호출이 무한정 반복된다.
    }

    get age(){
        return this._age;
        // 위의 무한 반복되는 문제 때문에 _age로 바꿔줌
    }
    // set은 값을 설정해 주어야함
    set age(value){
        this._age=value < 0 ? 0 : value;
        // 위의 무한 반복되는 문제 때문에 _age로 바꿔줌
    }
}

const user1=new User('dolfo','Ro', -1);
// 나이가 -1세 인게 말이 안됨
// 이렇게 사용자가 클래스를 잘못 사용해도 방어할 수 있도록 하는것이 Getter and setters 이다.
console.log(user1.age);


// 3. Fields (public, private)
// 최근에 추가됨
class Experiment {
    publicField=2;
    // 클래스 외부에서도 사용 가능
    #privateField=0;
    // 클래스 내부에서만 사용 가능
}
const experiment=new Experiment();
console.log(experiment.publicField);  // 2 출력
console.log(experiment.privateField);  // undefined


// 4. Static properties and methods
// object에 할당되는 것이 아니라 클래스의 속성과 메소드이기 때문에 호출 할 때에도 class명. 으로 호출 하여야 한다.
// object에 상관없이 공통으로 사용해야한다면 Static properties and methods 를 사용하는 것이 메모리 사용을 줄일 수 있다. 
// 최근에 추가됨
class Article {
    // Static properties
    static publisher='Dream Coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }

    // Static methods
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1=new Article(1);
const article2=new Article(2);

console.log(article1.publisher);  // undefined 출력
console.log(Article.publisher);  // Dream Coding 출력
Article.printPublisher();  // Dream Coding 출력


// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`)
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        // overriding -> 상속 받은 method를 재정의 하는 것
        // 더 이상 부모 클래스의 draw method는 호출 되지 않음.
        super.draw();
        // 부모 클래스의 draw method도 호출하기 위한 코드
        console.log('삼각형입니다.')
    }
    getArea(){
        // overriding
        return (this.width * this.height)/2;
    }
}
// Shape 클래스에서 정의한 field와 method를 사용할 수 있음.
const rectangle=new Rectangle(20, 20, 'blue')
const triangle=new Triangle(20, 20, 'red')
rectangle.draw();  // drawing blue color!
triangle.draw();  // drawing red color!
console.log(rectangle.getArea());  // 400
console.log(triangle.getArea());  // 200


// 6. Class checking: instanceOf
// object가 특정 class를 이용해 만들어졌는지 확인할 수 있음 -> true 또는 false 값을 반환
console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle);  // true
console.log(triangle instanceof Shape);  // true -> 상속
console.log(triangle instanceof Object);  // true -> 모든 클래스는 javascript의 Object 클래스를 상속한 것

