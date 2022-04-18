const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const counter = document.getElementById("counter");
const likes = document.querySelector("ul.likes");
const comment_form = document.querySelector("#comment-form");
const comments = document.querySelector("#list");
let paused = false;
let interval = setInterval(incrCounter, 1000);
let numberTracker = {};


plus.addEventListener("click", incrCounter);
minus.addEventListener("click", decrCounter);
pause.addEventListener("click", pauseCount);
heart.addEventListener("click", likeNum);
comment_form.addEventListener("submit", commentSubmit)

function pauseCount() {
  paused = !paused
  if (paused) {
    clearInterval(interval);
    pause.innerText = "resume";
  }
  else {
    interval = setInterval(incrCounter, 1000);
    pause.innerText = "pause";
  }
};
function incrCounter() {
  counter.innerText++;
};
function decrCounter() {
  counter.innerText--;
};
function likeNum() {
  let num = counter.innerText;
  numberTracker[num] = numberTracker[num] || 0;
  numberTracker[num] += 1
  renderLikes()
};
function renderLikes() {
  likes.innerHTML = ""
  for (let key in numberTracker) {
    const li = document.createElement('li')
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likes.append(li);
  }
};
function commentSubmit(event) {
  event.preventDefault();
  const comment = event.target.querySelector('input').value;
  const li = document.createElement("li");
  li.innerText = comment
  comments.append(li);
  event.target.reset();
}