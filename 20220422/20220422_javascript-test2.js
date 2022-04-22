const arr = ["카푸치노", "아메리카노", "맥주", "소주", "칭따오"];

console.log(arr)


let indexValue = 0;
// 인덱스 자리에 사칙연산을 써먹으려고 변수를 하나 만들어 주었다.

// setTimeout(function(){

//   console.log(arr[indexValue]);
//   indexValue++;

//   if(indexValue === arr.length) {
//     clearTimeout();
//   }
// }, 5000);

let count = 0;

let timer = setInterval(function(){
  if(indexValue < arr.length) {
    console.log(arr[indexValue]);
    indexValue++;
  } else {
    indexValue = 0;
    count++;
  }

  if(count > 3) {
    clearInterval(timer);
  }
  
}, 1000);