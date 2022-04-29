
// console.log(3123158+46464545);
// console.log(2315+54554);

// let one = 1313556;
// let two = 426909;
// let three = 66488;
// console.log(one+two);
// console.log(two+three);

//----------- 사용자 함수 ----------------

// function sum(front, back) { //매개변수

//   return front + back;
//   //값은 무엇인지 모르겠지만, 어쨋거나 front와 back을 더해줘 = 기계를 만들었다.
// }

// console.log(sum(1,2));

//----------------------------------------

function sum(front, back) {

  if(typeof front === true) {
    let result = front + back;
    return result;

  } else {
    console.log('당신이 작성한 front 매개변수는 타입이 숫자가 아닙니다.')
  }

}

console.log(sum('수연',2));