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


