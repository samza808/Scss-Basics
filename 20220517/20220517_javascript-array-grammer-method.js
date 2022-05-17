

const arrExample = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스", "우린", "서로", "모습은", "달라도"]

//-------------------------------------

// 1. forEach() : 배열의 모든 요소를 순서대로 함수로 전달한다.
// >> forEach((요소, 인덱스)=>{함수내용});

let testArr = arrExample.forEach((value, index) => {
  console.log('testArr['+ index +']='+ value);
});

//-------------------------------------

// 2. push() : 배열의 '마지막'에 요소를 '추가'한다.

arrExample.push('우리는 모두 친구');
console.log(arrExample);

//-------------------------------------

// 3. pop() : 배열의 '마지막 요소'를 '제거'한다.

const arrExampleTow = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스"]

arrExampleTow.pop();
console.log(arrExampleTow);

//-------------------------------------

// 4. shift() : 배열의 '첫번째 요소'를 '제거'한다.

arrExampleTow.shift();
console.log(arrExampleTow);

//-------------------------------------

// 5. unshift() : 배열의 '첫번째'에 요소를 '추가'한다.

arrExampleTow.unshift('삐까쮸');
console.log(arrExampleTow);

//-------------------------------------

// 6. indexOf() : 요소가 배열의 몇 번째에 있는지 알려줘

console.log(arrExampleTow.indexOf('꼬부기'));
//결과 : 3

//-------------------------------------

// 7. splice() : 배열에 요소를 제거/추가
// >> splice(start, end, value);

const arrExampleThree = ["피카츄", "라이츄", "파이리", "꼬부기"];
arrExampleThree.splice(0,4,'메타메타몽몽');

console.log(arrExampleThree);
//결과 : [메타메타몽몽] 
//end에 3을 쓰면 꼬부기가 남음.. 왜 꼬부기가 3이 아니지? 

//-------------------------------------

// 8. slice() : 배열에서 start부터 end까지의 요소를 추출

const arrExampleFour = ["피카츄", "라이츄", "파이리", "꼬부기"];

console.log(arrExampleFour.slice(0,3));
// 결과 : [ '피카츄', '라이츄', '파이리' ]

//-------------------------------------

// 9. Array.from() : 어떤 데이터로부터 배열을 생성

console.log(Array.from('asdfg'));
// 결과 : [ 'a', 's', 'd', 'f', 'g' ]
console.log(Array.from([1, 2, 4], a => a + a));
// 결과 : [ 2, 4, 8 ]
console.log(Array.from([1, 2, 4], a => a * a));
// 결과 : [ 1, 4, 16 ]
// reduce랑 비슷... 한듯?

// https://paperblock.tistory.com/73

//-------------------------------------

// 10. isArray() : arr가 배열이 맞는지 구분. true, false로 반환된다.
// >> Array.isArray(arr);

const arrNum = [10, 20, 30, 40];
console.log(Array.isArray(arrNum));
// 결과 : true

const hello = 'HELLO';
console.log(Array.isArray(hello));
// 결과 : false

//-------------------------------------

// 11. at() : 배열의 n번째에 있는 값을 알려준다.
// 음수값을 사용할 수 있음 / at(-1)은 배열의 마지막 요소를 뜻한다.

const testArrTow = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀'];

console.log(testArrTow.at(-1));
// 결과 : 버터풀

console.log(testArrTow.at(4));
// 결과 : 버터풀

//-------------------------------------

// 12. concat() : 배열의 맨 뒤에 배열, 문자열, 숫자, 객체 요소를 추가해 배열로 반환

console.log(testArrTow.concat([2,4,6],'야도란'));
// 결과 : ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', 2, 4, 6, '야도란']

//-------------------------------------

// 13. every() : 배열의 모든 요소가 조건에 부합하는지 판단한다. / 판별함수를 통과하는지 테스트한다.
// >> true / false로 반환됨 
// ** 하나라도 맞지 않으면 false가 반환된다.

const arrOne = [1, 2, 3];
const arrOneTest = arrOne.every(value => typeof(value) === 'number');
console.log(arrOneTest);
// 결과 : true

const arrTow = ['가', '나', 3];
const arrTowTest = arrTow.every(value => typeof(value) === 'string');
console.log(arrTowTest);
// 결과 : false

//-------------------------------------

// 14. filter() : 배열에서 조건에 부합하는 요소를 출력한다.
// ** 부합하는 요소들을 모아 새로운 배열로 반환한다.

const arrThree = [10, 20, 30, 40, 50];

const arrThreeTest = arrThree.filter(value => value > 22);
console.log(arrThreeTest);
// 결과 : [ 30, 40, 50 ]

const arrFour = ['가','나','다', 1, 2, 3];

const arrFourTest = arrFour.filter(value => typeof(value) === 'string');
console.log(arrFourTest);
// 결과 : [ '가', '나', '다' ]

const arrFourTestTow = arrFour.filter(value => value === '가');
console.log(arrFourTestTow);
// 결과 : [ '가' ]

//-------------------------------------

// 15. findIndex() : 배열에서 조건에 부합하는 요소 중 가장 '첫번째 요소의 인덱스 값'을 출력한다.

const findArrFour = arrFour.findIndex(value => typeof(value) === 'number');

console.log(findArrFour);
// 결과 : 3

//-------------------------------------

// 16. includes() : 배열이 특정 요소를 포함하고있는지 판단한다.

let poke = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀'];

console.log(poke.includes('피카츄'));
// 결과 : true

console.log(poke.includes('삐까쮸'));
// 결과 : false

//-------------------------------------

// 17. join() : 배열의 모든 요소를 하나의 문자열로 반환

let stringArr = ['햄스터', '토끼', '여우', '설표', '앵무새'];

console.log(stringArr.join());
// 결과 : 햄스터,토끼,여우,설표,앵무새

console.log(stringArr.join(''));
// 결과 : 햄스터토끼여우설표앵무새

console.log(stringArr.join(' '));
// 결과 : 햄스터 토끼 여우 설표 앵무새

//-------------------------------------

// 18. map : 배열 내의 모든 요소에 각각 주어진 함수를 호출한 결과를 배열로 반환한다.

const testArrThree = [10, 20, 30, 40];
const testMap = testArrThree.map(value => value + 10);

console.log(testMap);
// 결과 : [ 20, 30, 40, 50 ]

const testMapTwo = testArrThree.map(value => value + '점');

console.log(testMapTwo);
// 결과 : [ '10점', '20점', '30점', '40점' ]

//-------------------------------------

// 19. reduce() : arr.reduce(callback[, initialValue])

// ** callback : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 가짐
// ** accumulator : 누산기. 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값임
// ** currentValue : 처리할 현재 요소
// ** currentIndex (Optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
// ** array (Optional) : reduce()를 호출한 배열
// ** initialValue (Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류 발생

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, cur) => acc + cur);
console.log(result);
// 결과 : (0+1 > 1+2 > 3+3 > 6+4 > 10+5) = 10
// >> (이전값, 현재값) => (이전값 + 현재값);

// ******************** ▽ https://miiingo.tistory.com/365 *****************************

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result2);  
// >> acc의 초기값 = 0 
// >>> 0 + 1 + 2 + 3 + 4 + 5 = 15
// 결과 : 15

const arr3 = [1, 2, 3, 4, 5];
const result3 = arr3.reduce((acc, cur, idx) => { return acc += cur; }, 10);
console.log(result3);  
// >> acc의 초기값 = 10
// >>> 10 + 1 + 2 + 3 + 4 + 5 = 25
// 결과 : 25

// ************ reduce() 활용하여 음수와 양수의 개수 출력 **************

const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const resultTow = numbers.reduce((acc, cur, idx) => { 
  if(cur < 0){
    // 처리할 현재 요소가 음수일 경우
    acc[0]++;
  }
  else if(cur > 0){
    // 처리할 현재 요소가 양수일 경우
    acc[1]++;
  }
  return acc;
  }, [0,0]);
console.log(resultTow); 
// 결과 : [4, 5]

//-------------------------------------

// 20. some() : 배열 안에 있는 어떤 요소라도 판별함수를 통과하는지 테스트함
// ** 하나라도 통과하면 true를 반환한다.
// ** 빈 배열에서 호출하면 무조건 false를 반환.

const someCheck = (value) => typeof(value) === 'string';
// 판별함수

const arrTwo = [10, 20, 30, 'a', 40, 50]; 
console.log(arrOne.some(someCheck));
// 결과 : true

// ** 빈 배열에서 호출하면 무조건 false를 반환한다.
const arrEmpty = [ ];
console.log(arrEmpty.some(someCheck));
// 결과 : false

// *********************************

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// 결과 : true

//-------------------------------------

// 21. sort() : 배열의 요소를 알파벳순으로 정렬. 한글이라면 가나다순으로 정렬
// ** 문제점 : 모든 원소를 문자열로 취급하기 때문에, 배열값이 숫자일 경우 [10, 20, 110]이 있으면 [10, 110, 20]으로 정렬해버린다. 찌끔 멍청함..

const arrDrink = ['콜라', '사이다', '환타', '웰치스'];
console.log(arrDrink.sort());
//결과 : [ '사이다', '웰치스', '콜라', '환타' ]

const arrAbc = ['apple', 'peach', 'mango', 'lemon'];
console.log(arrAbc.sort());
//결과 : [ 'apple', 'lemon', 'mango', 'peach' ]

const arrNumber = [10, 40, 50, 20, 11, 98, 119];
console.log(arrNumber.sort());
// 결과 : [ 10, 11, 119, 20, 40, 50, 98 ]

//-------------------------------------

// 22. toString() : 배열의 요소를 하나의 문자열로 반환

const coffee = ['아메리카노', '카페라떼', '카푸치노', '바닐라라떼'];

console.log(coffee.toString());
// 결과 : 아메리카노,카페라떼,카푸치노,바닐라라떼

//-------------------------------------

// 23. Object.values() : 메서드는 배열의 각 인덱스에 대한 값을 가지는 새로운 Array Iterator 객체를 반환합니다.

const arrSix = ['S', 'I', 'X'];
const arrValues = arrSix.values();

for (const value of arrValues){
console.log(value);
}

// 결과 : 
// S
// I
// X

// *************************************

// for( const value of iterator){} 와 짝꿍인 것 같다.

/* 
const arrOne = ['O', 'N', 'E']
for (const value of arrOne.values()){ console.log(value); }
==> 이렇게 써도 잘 작동된다.
==> for ( 변수 of 배열.values()){ 반복출력(변수); }
*/

// *************************************

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));

// 결과 : [ 'somestring', 42, false ]