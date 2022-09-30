let htmlBtn = document.getElementById('html-btn');
let cssBtn = document.getElementById('css-btn');
let jsBtn = document.getElementById('js-btn');
let htmlList = document.getElementById('html-list');
let cssList = document.getElementById('css-list');
let jsList = document.getElementById('js-list');
let arrow = document.getElementById('arrow');
let cssArrow = document.getElementById('css-arrow');
let jsArrow = document.getElementById('js-arrow');
htmlBtn.addEventListener('click', () => {
     htmlList.classList.toggle('active');
     arrow.classList.toggle('rotate');
})
cssBtn.addEventListener('click', () => {
     cssList.classList.toggle('active');
     cssArrow.classList.toggle('rotate');

})
jsBtn.addEventListener('click', () => {
     jsList.classList.toggle('active');
     jsArrow.classList.toggle('rotate');

})



document.querySelector('#search').addEventListener('input', firstList);
function firstList() {
     const searchInput = document.querySelector('#search');
     const filter = searchInput.value.toLowerCase();

     const listItem = document.querySelectorAll('.item');
     listItem.forEach((item) => {
          let text = item.textContent;
          if (text.toLowerCase().includes(filter.toLowerCase())) {
               item.style.display = "";
          } else {
               item.style.display = "none";
          }
     })
}