
// const memberOne = {
//   name : '권수연',
//   gender : 'female',
//   age : 26,
//   deskNumber : 7,
//   glasses : true,
//   hamster : 'cute',
//   phone : 'Galaxy'
// }


// const memberTwo = {
//   name : '나몰빼미',
//   gender : 'pokemon',
//   age : 5,
//   deskNumber : 12,
//   glasses : false,
//   hamster : 'cute',
//   phone : 'iphone'
// }

// console.log(memberOne.name);

// console.log(memberTwo.name);

//--------------------------------

//* 생성자 함수 : constructor function
//* 객체를 찍어내는 거푸집 틀
//* 석고 뜨는 함수

function Member(name, gender, age, deskNumber, glasses, hamster, phone) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.deskNumber = deskNumber;
    this.glasses = glasses;
    this.hamster = hamster;
    this.phone = phone;
}

const memberOne = new Member('꼬부기', '거북이', '13', '24', 'none', 'cute', 'iphone');
console.dir(memberOne);
//
const testOne = new Date();
console.dir(testOne.getHours());
//
function ampm(hour, msg) {
  if(hour > 12) {
    console.log(msg + '[' + (hour-12) + '시] 입니다.');
    console.log(memberOne.phone);
  } else {
    console.log('오전' +  hour  + '시 입니다.')
  }
}

ampm(testOne.getHours(), '오후 ');
console.log(ampm);


const testTwo = new Date();
console.dir(testTwo.getDay());

function week(hour, msg) {
}
