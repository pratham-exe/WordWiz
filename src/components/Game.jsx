import React, { useState } from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useLocation, Outlet, Link } from "react-router-dom";
import "./Popup.css";
import "./Game.css";

function Game() {
  const [start, setStart] = useState(true);
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup, setPopup] = useState(false);
  const [word, setWord] = useState({
    word1: "",
    word2: ""
  })
  const location = useLocation();
  const player = location.state;

  function updatePopup() {
    setPopup(true);
  }

  function updatePopup1() {
    setPopup1(true);
  }

  function updatePopup2() {
    setPopup2(true);
  }

  function updateStart() {
    if (word.word1.length === 5 && word.word2.length === 5) {
      setStart(!start);
      console.log(document.getElementsByClassName("lock"));
    }
  }

  function updateWord(event) {
    const { name, value } = event.target;
    setWord((prevValue) => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','Enter','Delete'];

  var count = 1, test, fiveCount = 1, word_count = 0;

  {(!start && count > 0) && (
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
    check_game();
    if (count % 5 === 0 && test.textContent !== "") {
      count++;
      fiveCount = 1;
      let entered_word = "";
      for (let i=1;i<=5;i++) {
        let letter = document.getElementById(word_count + i).innerHTML;
        entered_word += letter;
      }
      word_count += 5;
      if ((word_count + 5) % 10 === 0) {
        if (word.word2.toUpperCase() === entered_word) {
          for (let i=1;i<=5;i++) {
            document.getElementById((word_count-5) + i).classList.add("green");
          }
          updatePopup1();
        } else {
          let entered_array1 = new Array();
          let hidden_word1 = new Array();
          for (let i=0;i<5;i++) {
            entered_array1.push(entered_word[i]);
            hidden_word1.push(word.word2[i]);
          }
          for (let i=1;i<=5;i++) {
            if ((hidden_word1[i-1]).toUpperCase() === entered_array1[i-1]) {
              document.getElementById((word_count-5) + i).classList.add("green");
              hidden_word1.splice(i-1, 1, "1");
            }
          }
          let i = 0;
          while (i < hidden_word1.length) {
            if (hidden_word1[i] === "1") {
              hidden_word1.splice(i, 1);
            } else {
              i++;
            }
          }
          let j = 0;
          for (let i=1;i<=5;i++) {
            for (j in hidden_word1) {
              if (entered_array1[i-1] === hidden_word1[j].toUpperCase()) {
                document.getElementById((word_count-5) + i).classList.add("yellow");
                hidden_word1.splice(j, 1);
                break;
              }
            }
          }
        }
      } else {
        if (word.word1.toUpperCase() === entered_word) {
          for (let i=1;i<=5;i++) {
            document.getElementById((word_count-5) + i).classList.add("green");
          }
          updatePopup2();
        } else {
          let entered_array2 = new Array();
          let hidden_word2 = new Array();
          for (let i=0;i<5;i++) {
            entered_array2.push(entered_word[i]);
            hidden_word2.push(word.word1[i]);
          }
          for (let i=1;i<=5;i++) {
            if ((hidden_word2[i-1]).toUpperCase() === entered_array2[i-1]) {
              document.getElementById((word_count-5) + i).classList.add("green");
              hidden_word2.splice(i-1, 1, "1");
            }
          }
          let i = 0;
          while (i < hidden_word2.length) {
            if (hidden_word2[i] === "1") {
              hidden_word2.splice(i, 1);
            } else {
              i++;
            }
          }
          let j = 0;
          for (let i=1;i<=5;i++) {
            for (j in hidden_word2) {
              if (entered_array2[i-1] === hidden_word2[j].toUpperCase()) {
                document.getElementById((word_count-5) + i).classList.add("yellow");
                hidden_word2.splice(j, 1);
                break;
              }
            }
          }
        } 
      }
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
    if (count === 50 && test.textContent !== "") {
      updatePopup();
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

  return (
    <div>
      {(popup1 || popup2 || popup) && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            <center>
              {popup1 ? <h1>Player 1 Wins !</h1> : (popup2 ? <h1>Player 2 Wins !</h1> : (popup ? <h1>Draw !</h1> : null))}
              <h2>Player 1 Word : {word.word1.toUpperCase()}</h2>
              <h2>Player 2 Word : {word.word2.toUpperCase()}</h2>
            </center>
            <button className="dashboard"><Link to="/User" style={{color: "white"}} state={player}>Dashboard</Link></button>
          </div>
        </div>
      )}
      <div className="left-board-container">
        <div className="board">
          <input style={{width: 200}} className="lock" type="password" placeholder="5 letter word for your opponent" name="word1" value={word.word1} onChange={updateWord} maxLength={5} />
          <div className="board-row">
            <div className="tile" id="1"></div>
            <div className="tile" id="2"></div>
            <div className="tile" id="3"></div>
            <div className="tile" id="4"></div>
            <div className="tile" id="5"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="11"></div>
            <div className="tile" id="12"></div>
            <div className="tile" id="13"></div>
            <div className="tile" id="14"></div>
            <div className="tile" id="15"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="21"></div>
            <div className="tile" id="22"></div>
            <div className="tile" id="23"></div>
            <div className="tile" id="24"></div>
            <div className="tile" id="25"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="31"></div>
            <div className="tile" id="32"></div>
            <div className="tile" id="33"></div>
            <div className="tile" id="34"></div>
            <div className="tile" id="35"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="41"></div>
            <div className="tile" id="42"></div>
            <div className="tile" id="43"></div>
            <div className="tile" id="44"></div>
            <div className="tile" id="45"></div>
          </div>
        </div>
      </div>
      {start && <button className="start" onClick={updateStart}>START</button>}
      <div style={start ? {marginTop: -155} : {marginTop: -295}} className="right-board-container">
        <div className="board">
          <input style={{width: 200}} className="lock" type="password" placeholder="5 letter word for your opponent" name="word2" value={word.word2} onChange={updateWord} maxLength={5} />
          <div className="board-row">
            <div className="tile" id="6"></div>
            <div className="tile" id="7"></div>
            <div className="tile" id="8"></div>
            <div className="tile" id="9"></div>
            <div className="tile" id="10"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="16"></div>
            <div className="tile" id="17"></div>
            <div className="tile" id="18"></div>
            <div className="tile" id="19"></div>
            <div className="tile" id="20"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="26"></div>
            <div className="tile" id="27"></div>
            <div className="tile" id="28"></div>
            <div className="tile" id="29"></div>
            <div className="tile" id="30"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="36"></div>
            <div className="tile" id="37"></div>
            <div className="tile" id="38"></div>
            <div className="tile" id="39"></div>
            <div className="tile" id="40"></div>
          </div>
          <div className="board-row">
            <div className="tile" id="46"></div>
            <div className="tile" id="47"></div>
            <div className="tile" id="48"></div>
            <div className="tile" id="49"></div>
            <div className="tile" id="50"></div>
          </div>
        </div>
      </div>
      <div className="keyboard-container">
        <div className="keyboard">
          <div className="keyboard-row">
            <button className="key q">Q</button>
            <button className="key w">W</button>
            <button className="key e">E</button>
            <button className="key r">R</button>
            <button className="key t">T</button>
            <button className="key y">Y</button>
            <button className="key u">U</button>
            <button className="key i">I</button>
            <button className="key o">O</button>
            <button className="key p">P</button>
          </div>
          <div className="keyboard-row">
            <button className="key a">A</button>
            <button className="key s">S</button>
            <button className="key d">D</button>
            <button className="key f">F</button>
            <button className="key g">G</button>
            <button className="key h">H</button>
            <button className="key j">J</button>
            <button className="key k">K</button>
            <button className="key l">L</button>
          </div>
          <div className="keyboard-row">
            <button className="special key Enter" style={{flexGrow: 1.5}}><KeyboardReturnIcon /></button>
            <button className="key z">Z</button>
            <button className="key x">X</button>
            <button className="key c">C</button>
            <button className="key v">V</button>
            <button className="key b">B</button>
            <button className="key n">N</button>
            <button className="key m">M</button>
            <button className="special key Delete" style={{flexGrow: 1.5}}><BackspaceIcon /></button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Game;
