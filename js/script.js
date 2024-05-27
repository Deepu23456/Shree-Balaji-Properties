const button1 = document.querySelector('.open1')
const button2 = document.querySelector('.open2')
const button3 = document.querySelector('.open3')
const reviews = document.querySelectorAll(".review-content");
const previ = document.querySelector(".prev i");
const nexti = document.querySelector(".next i");
const menuClose = document.querySelector('.menuClose')
const menuOpen = document.querySelector('.menuOpen')
const nav = document.querySelector('nav')

console.log(reviews);

let counter = 0;
reviews.forEach((review, index) => {
  review.style.left = `${index * 100}%`;
});

function prev() {
  counter--;
  if (counter < 0) {
    counter = 0;
    return;
  }
  slider();
}

function next() {
  counter++;
  if (counter > 4) {
    counter = 4;
    return;
  }
  slider();
}

const slider = () => {
  reviews.forEach((review) => {
    review.style.transform = `translateX(-${counter * 100}%)`;
  });
};

previ.addEventListener("click", () => {
  prev();
});
nexti.addEventListener("click", () => {
  next();
});

button1.addEventListener('click', () => {
  button1.classList.toggle('active')
  button2.classList.remove('active')
  button3.classList.remove('active')
})
button2.addEventListener('click', () => {
  button1.classList.remove('active')
  button3.classList.remove('active')
  button2.classList.toggle('active')
})
button3.addEventListener('click', () => {
  button1.classList.remove('active')
  button2.classList.remove('active')
  button3.classList.toggle('active')
})

menuOpen.addEventListener('click', () => {
  nav.classList.add('openup')
})
menuClose.addEventListener('click', () => {
  nav.classList.remove('openup')
})




