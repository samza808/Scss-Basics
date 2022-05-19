
let obj = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
  sum : function(one, two) {
    if(typeof one === 'number' && typeof two === 'number') {
      return one + two;
    } else {
      console.error('데이터 타입입력이 잘못되었습니다.');
    }
  }
}

console.log(obj.a !== obj.b || obj.a === obj.c);
console.log(obj.a !== obj.b && obj.a === obj.c);
console.log(obj.sum(obj.a, obj.b));