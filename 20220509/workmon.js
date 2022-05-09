
let a = 1;
let b = 1;
let c = 2;

function valueTest () {

  if(typeof a === 'number') {
    console.log('변수 a는 데이터 타입이 숫자이다');
  } else {
    console.log('변수 a는 숫자타입이 아니다.');
  }
  
  if(typeof b === 'number') {
    console.log('변수 b는 데이터 타입이 숫자이다.')
  } else {
    console.log('변수 b는 숫자타입이 아니다.')
  }
}

// valueTest();

// function valueTestTow() {

//   if(typeof a === 'number' && typeof b === 'string') {
//     console.log('변수a와 b는 모두 number 타입입니다.');
//   } else {
//     console.log('변수a와 b는 둘 중 하나이거나 둘 다 number가 아닐 수 있다.');
//   }

// }

function valueTestTow() {
  if(typeof a === 'string') {
    console.log('참이 실행되었습니다');
  } else {
    console.log('test');
  }
}

valueTestTow();