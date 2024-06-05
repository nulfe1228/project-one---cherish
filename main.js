const diaryBtn = document.querySelector(".diary");
const modal1 = document.querySelector(".modal1");
const calBtn = document.querySelector(".cal");
const modal2 = document.querySelector(".modal2");
const bookBtn = document.querySelector(".books");
const modal3 = document.querySelector(".modal3");
const movieBtn = document.querySelector(".movie");
const modal4 = document.querySelector(".modal4");
const recipeBtn = document.querySelector(".recipe");
const modal5 = document.querySelector(".modal5");
const closeBtn = document.querySelector(".close_btn")


// 달력 start

const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
  
    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  
    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;
  
    let htmlDummy = '';
  
    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    for (let i = 1; i <= lastDay; i++) {    
      htmlDummy += `<div>${i}</div>`;
    }
  
    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
  }
  
  
  const date = new Date();
  
  makeCalendar(date);
  
  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  }
  
  // 다음달 이동
  document.querySelector(`.nextDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  }

// 달력 end





diaryBtn.addEventListener("click", () => {
    modal1.showModal()
})

calBtn.addEventListener("click", () => {
    modal2.showModal()
})

bookBtn.addEventListener("click", () => {
    modal3.showModal()
})

movieBtn.addEventListener("click", () => {
    modal4.showModal()
})

recipeBtn.addEventListener("click", () => {
    modal5.showModal()
})


