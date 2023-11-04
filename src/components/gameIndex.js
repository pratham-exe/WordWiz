const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','Enter','Delete'];

var count = 1, test, fiveCount = 1, keep = 0;

document.addEventListener("keypress", (event) => {
  if (count === 51) {
    alert("Game Over");
    count = 1;
  }
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
      if (count % 5 === 0 && test.textContent !== "") {
        count++;
        fiveCount = 1;
      }
    } else if (event.key === "Delete") {
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

var buttons = document.querySelectorAll(".key");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",function () {
    var clickedKey = this.innerHTML;
    if (this.classList[0] === "special") {
      this.classList.add("pressed");
      setTimeout(() => {
        this.classList.remove("pressed")
      }, 100);
    } else {
      keyAnimate(clickedKey.toLowerCase());
    }
  })
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
