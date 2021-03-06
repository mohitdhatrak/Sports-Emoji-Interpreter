import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [userInput, setUserInput] = useState("");

  var emojiDictionary = {
    "🛹": "Skateboard",
    "🛶": "Canoe",
    "🎗️": "Reminder Ribbon",
    "🎖️": "Military Medal",
    "🏆": "Trophy",
    "🏅": "Sports Medal",
    "🥇": "1st Place Medal",
    "🥈": "2nd Place Medal",
    "🥉": "3rd Place Medal",
    "⚽": "Soccer Ball",
    "⚾": "Baseball",
    "🥎": "Softball",
    "🏀": "Basketball",
    "🏐": "Volleyball",
    "🏈": "American Football",
    "🏉": "Rugby Football",
    "🎾": "Tennis",
    "🥏": "Flying Disc",
    "🎳": "Bowling",
    "🏏": "Cricket Game",
    "🏑": "Field Hockey",
    "🏒": "Ice Hockey",
    "🥍": "Lacrosse",
    "🏓": "Ping Pong",
    "🏸": "Badminton",
    "🥊": "Boxing Glove",
    "🥋": "Martial Arts Uniform",
    "🥅": "Goal Net",
    "⛳": "Flag in Hole",
    "⛸️": "Ice Skate",
    "🎣": "Fishing Pole",
    "🎽": "Running Shirt",
    "🎿": "Skis",
    "🛷": "Sled",
    "🥌": "Curling Stone",
    "🎯": "Direct Hit",
    "🎱": "Pool 8 Ball",
    "♟️": "Chess Pawn",
    "🏹": "Bow and Arrow"
  };

  function inputText(event) {
    var userInput = event.target.value.trim();
    if (userInput === "") {
      setUserInput("");
    } else {
      var emoji = emojiDictionary[userInput];
      if (emoji === undefined) {
        setUserInput(
          "Sorry, this emoji is not available in our database, please try a sport-related emoji"
        );
      } else {
        setUserInput(emoji);
      }
      console.log(emoji);
      console.log(userInput);
    }
  }

  var emojiArray = Object.keys(emojiDictionary);

  function clickHandler(emojidata) {
    var meaning = emojiDictionary[emojidata];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 className="header">Sports Emoji's Meaning</h1>
      <div className="output-text">{userInput}</div>
      <input
        className="input-text"
        onChange={inputText}
        placeholder="Type your emoji here"
      ></input>
      <h3>Or choose one emoji to know it's meaning</h3>
      <ul className="emoji-container">
        {emojiArray.map((emojiSymbol) => (
          <li
            className="emoji-style"
            onClick={function () {
              clickHandler(emojiSymbol);
            }}
          >
            {emojiSymbol}
          </li>
        ))}
      </ul>
      <footer class="footer-container">
        <h2>Connect with me</h2>
        <div class="social-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mohitdhatrak"
          >
            <img src="/twitter.svg" alt="" class="small-image-size" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohitdhatrak/"
          >
            <img src="/linkedin.svg" alt="" class="small-image-size" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mohitdhatrak"
          >
            <img src="/github.svg" alt="" class="small-image-size" />
          </a>
        </div>
      </footer>
    </div>
  );
}
