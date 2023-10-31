import React from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';
import "./gameIndex.js";

function Game() {
  return (
    <div>
      <div className="left-board-container">
        <div className="board">
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
      <div className="right-board-container">
        <div className="board">
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
    </div>
  );
}

export default Game;
