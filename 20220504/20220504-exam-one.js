
// // 기명함수방식 : 일반적인 함수 선언 방식

// function textMachine(startValue, endValue, textValue){
  
//   for(let i = startValue; i <= endValue; i++) {
//     console.log(textValue);
//   }

//   return '메롱메롱';

// }

// textMachine(1, 20, 'hello');
// textMachine(3, 10, 'bye');

// console.log(textMachine(2,2,'test'));


// --------------------

// function textMachine(startValue, endValue, textValue){
  
//   let result = textValue;

//   for(let i = startValue; i <= endValue; i++) {
//   }

//   return result;

// }

// console.log(textMachine(1,2,'콘솔'));

// // >>
// // 실행했을 뿐 값을 도출한것은 아님
// // return : 값이 나오는 용


// --------------------


// function a() {
//   console.log('test');
//   // return '메롱';
// }

// a();
// console.log(a());

// --------------------


// function b (first, second) {
//   return first + second;
// }

// console.log(b(1,2));

// // --------------------

// function b (first, second) {
//   console.log(first + second);
//   //함수내부에 콘솔을 찍는것은 전적으로 개발자용(확인용)
// }

// b(1,2);

// ----------------------

function b (first, second) {
  if(typeof first === 'number') {
    return first - second;
  } else {
    console.log('첫번째 매개변수타입이 숫자가 아닙니다.');
  }
}

console.log(b('문자열',2));