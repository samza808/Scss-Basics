
// const arr = [ "a", "b", "c"];

// todo
// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?
// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

// console.log(arr);

const orderArr = function(list, targetIdx, moveValue) {

  if(list.lenght < 0) return;

  const newPosition = targetIdx + moveValue;

  if(newPosition < 0 || newPosition >= list.lenght) return;

  const tempList = JSON.parse(JSON.stringify(list));

  const target = tempList.splice(targetIdx, 1);

  tempList.splice(newPosition, 0, target);
  return tempList;

  

};

const arr = [ "a", "b", "c"];
let test = arr[1];
console.log(test);

console.log(orderArr(arr,0,1));
console.log(orderArr(arr,2,-2));
console.log(orderArr(arr,0,1));
