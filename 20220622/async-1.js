
// function text() {
//   return `<div>hello</div>`;
// }

// function section() {
//   return `<section>bye</section>`;
// }

// let timerA = setTimeout(() => {
//   console.log(text());
//   let timerB = setTimeout(() => {
//     console.log(section());
//   }, 0);
// }, 1000);


// ------------------------------------

function a() {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log('지금 함수 a가 실행되었습니다.');
      resolve('리졸브확인');
    },4000);
  });
}

a().then(function(data){
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log('여기는 지금 then이라는 함수 안에서 실행된 것입니다.')
      resolve(data);
    },1000);
  });
});


