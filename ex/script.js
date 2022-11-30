let article = document.querySelectorAll('.article');
let answer = document.querySelectorAll('.answer');



for (let i = 0; i < article.length; i++) {
     article[i].addEventListener('click', () => {
          answer[i].classList.toggle('active');
     })
}

