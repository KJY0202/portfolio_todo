const data = [
  { main: "할 일이 없어요", sub: "위 칸에 적고 Enter 를 누르면 여기에 쌓여요" },
  { main: "남은 일이 없어요", sub: "오늘 몫은 다 끝냈어요" },
  { main: "아직 끝낸 일이 없어요", sub: "체크한 일이 여기로 모여요" },
];

const today = new Date();

const day = ["월", "화", "수", "목", "금", "토", "일"];

const dateElement = document.querySelector(".date");

dateElement.innerHTML = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${day[today.getDay() - 1]}`;

const btnEle = document.querySelectorAll(".btn");
const desEle = document.querySelector(".description");
const prog = document.querySelector(".prog");

btnEle.forEach((x, i) => {
  x.addEventListener("click", () => {
    btnEle.forEach((y) => {
      y.classList.remove("activate");
    });

    x.classList.add("activate");

    desEle.innerHTML = `<span>${data[i].main}</span></br><p>${data[i].sub}</p>`;
  });
});

const input = document.querySelector("#input_schedule");
const add = document.querySelector(".add");
const list = document.querySelector(".list");

add.addEventListener("click", () => {
  desEle.style.display = "none";

  const schedule = document.createElement("div");
  schedule.classList.add("schedule");

  const check = document.createElement("input");
  check.type = "checkbox";

  check.addEventListener("click", () => {
    const checks = document.querySelectorAll(".schedule input");

    const checked = [...checks].filter((x) => x.checked);

    const progress = (checked.length / checks.length) * 100;

    prog.value = progress;
  });

  const deleteTask = document.createElement("button");
  deleteTask.innerHTML = "X";

  schedule.append(check);
  schedule.append(input.value);
  schedule.append(deleteTask);

  list.append(schedule);
});

const deleteAll = document.querySelector(".deleteAll");
deleteAll.addEventListener("click", () => {
  list.style.display = "none";
});
