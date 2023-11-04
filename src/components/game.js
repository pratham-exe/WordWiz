import { game_start } from "./Game.jsx";

const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','Enter','Delete'];

var count = 1, test, fiveCount = 1;

{false && (
  document.addEventListener("keypress", (event) => {
    check_game();
    test = document.getElementById(count);
    if (count % 5 === 0) {
      if (keys.includes(event.key.toLowerCase())) {
        test.textContent = event.key.toUpperCase();
        fiveCount = count;
      }
    }
    if (event.key === "Enter" || event.key === "Delete" || count % 5 === 0) {
      keyAnimate(event.key);
      if (event.key === "Enter") {
        enter_button();
      } else if (event.key === "Delete") {
        delete_button();
      }
    } else if (!(keys.includes(event.key.toLowerCase()))) {
      count = count;
    } else {
      count++;
      keyAnimate(event.key.toLowerCase());
      if (keys.includes(event.key.toLowerCase())) {
        test.textContent = event.key.toUpperCase();
      }
    }
  })
)}

function enter_button() {
  if (count % 5 === 0 && test.textContent !== "") {
    count++;
    fiveCount = 1;
  }
}

function delete_button() {
  if ((count - 1) % 5 === 0) {
    count = count;
  } else if (count === 1) {
    test.textContent = "";
    count = 1;
  } else if (fiveCount % 5 === 0) {
    test = document.getElementById(fiveCount);
    test.textContent = "";
    fiveCount = 1;
  } else {
    test = document.getElementById(--count);
    test.textContent = "";
  }
}

function check_game() {
  if (count === 51) {
    alert("Game Over");
    count = 1;
  }
}

function keyAnimate(currentKey) {
  if (keys.includes(currentKey)) {
    var pressedKey = document.querySelector("." + currentKey);
    pressedKey.classList.add("pressed");
    setTimeout(() => {
      pressedKey.classList.remove("pressed")
    }, 100);
  }
}
