
const arr = [ "a", "b", "c"];

// todo
// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?
// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?


let temp;
temp = arr[0];
console.log(temp);

arr.shift();
console.log(arr);

arr.push(temp);
console.log(arr);