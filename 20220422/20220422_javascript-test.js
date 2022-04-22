
const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

const toDoWeek = {
  todoSunDay : ["밥먹기", "샤워하기", "머리감기", "과제하기", "진짜진짜일찍자기"],
  todoMonDay : ["밥먹기", "샤워하기", "일찍자기"],
  todoTuesDay : ["밥먹기", "샤워하기", "머리감기", "일찍자기"],
  todoWednesDay : ["밥먹기", "샤워하기", "일찍자기"],
  todoThursday : ["밥먹기", "샤워하기", "머리감기", "일찍자기"],
  todoFriday : ["밥먹기", "샤워하기", "운동하기", "레이드", "과제목록 작성하기", "병원가기"],
  todoSaturday : ["밥먹기", "샤워하기", "과제하기"]
}

console.log(week);

const todoSaturday = `오늘은 "${week[week.length-1]}"입니다. 오늘의 할 일은 "${toDoWeek.todoSaturday}" 입니다.`;

console.log(todoSaturday);


