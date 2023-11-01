const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','Enter','Delete'];

var count = 1, test, fiveCount = 1, keep = 0;
const left_player = ['w','o','r','l','d'];
const right_player = ["truth"];

document.addEventListener("keypress", (event) => {
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
      if (count % 5 === 0) {
        let check = [], correct = 0;
        for (let i=1;i<=5;i++) {
          let letter = document.getElementById(i+keep).innerHTML;
          check.push(letter);
        }
        for (let i=0;i<5;i++) {
          if (left_player[i] === check[i].toLowerCase()) {
            correct++;
          }
        }
        keep = keep + 5;
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
