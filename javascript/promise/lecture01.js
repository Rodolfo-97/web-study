`use strict`;
// Promise
// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// promise가 만들어진 순간 그 안에 전달한 콜백 함수는 즉시 자동으로 실행된다!!!
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('Rodolfo');
    }, 2000);
});

// 2. Cunsumers: then, catch, finally
promise
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally')
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
    .then(num => num*2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num));




