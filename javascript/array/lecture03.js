'contrict'
// Array APIs

// 1. make a string out of array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(/* 구분자를 넣을 수 있음 */);
    console.log(result);  // apple,banana,orange
}

// 2. make an array out of a string
{
    const fruits = 'apple, banana, orange';
    const result = fruits.split(',',/* 우리가 리턴 받을 배열의 사이즈를 지정 */);
    console.log(result);  // ["apple", " banana", " orange"]
}

// 3. make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);  // [5, 4, 3, 2, 1]
    console.log(array);  // [5, 4, 3, 2, 1] -> 원래 배열 자체도 순서가 바뀜
}

// 4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.splice(0, 2);
    console.log(result);  // 삭제된 [1, 2]가 리턴
    console.log(array);  // [3, 4, 5]
    
    // 우리는 새로운 배열을 만드는 것이기 때문에 기존 배열을 변경하는 splice 말고 다른 API를 사용하여야 한다.
    const array2 = [1,2,3,4,5];
    const result2 = array2.slice(2, 5)  // 마지막 5번 index앞까지 자르기 때문에 4번 index도 포함하기 위해선 5를 적어 주어야 한다. 
    console.log(result2);  // [3, 4, 5]
    console.log(array2);  // [1, 2, 3, 4, 5] -> 기존 배열은 변경하지 않고 새로운 배열을 만든다는 것을 알 수 있다.
}



// 5.
class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// 5-1. find a student with the score 90
{
    // 반복문을 이용한 경우
    for(i = 0; i < student.length; i++){
        if(student[i].score == 90){
            console.log(student[i])
        }
    }

    // find(); 를 이용한 경우
    const result = student.find(/* 콜백함수 */(student) => student.score === 90
        // 여기서 콜백함수는 return 값이 true 이면 반환하고 false 이면 다음 student를 살펴본다.
    ); 
    console.log(result);
}

// 5-2. make an array of enrolled students
{
    // filter(); 를 이용해 배열에서 원하는 값만 받아와 새로운 배열을 만들 수 있음
    const result = student.filter((student) => student.enrolled);
    console.log(result);
}

// 5-3. make an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = student.map(/* 콜백함수 */(student) => student.score);
    // 배열의 요소들을 콜백 함수에 따라 변환된 요소로 바꾼다.
    console.log(result);  // [45, 80, 90, 66, 88]
}

// 5-4. check if there is a student with the score lower than 50
{
    const result = student.some((student) => student.score < 50);
    // some(); -> 배열의 요소중 하나라도 true가 있으면 true
    console.log(result);  // true

    const result2 = student.every((student) => student.score < 50);
    // every(); 배열의 요소 전부가 true여야지 true
    console.log(result2);  // false
}

// 5-5. compute student's average score
{
    let sum = 0;
    for(let i = 0; i<student.length; i++){
        sum = sum + student[i].score;
    }
    console.log(sum);
}

// 5-6. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = student.map((student) => student.score).join();
    console.log(result);
}