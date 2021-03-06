import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [userInput, setUserInput] = useState("");

  var emojiDictionary = {
    "πΉ": "Skateboard",
    "πΆ": "Canoe",
    "ποΈ": "Reminder Ribbon",
    "ποΈ": "Military Medal",
    "π": "Trophy",
    "π": "Sports Medal",
    "π₯": "1st Place Medal",
    "π₯": "2nd Place Medal",
    "π₯": "3rd Place Medal",
    "β½": "Soccer Ball",
    "βΎ": "Baseball",
    "π₯": "Softball",
    "π": "Basketball",
    "π": "Volleyball",
    "π": "American Football",
    "π": "Rugby Football",
    "πΎ": "Tennis",
    "π₯": "Flying Disc",
    "π³": "Bowling",
    "π": "Cricket Game",
    "π": "Field Hockey",
    "π": "Ice Hockey",
    "π₯": "Lacrosse",
    "π": "Ping Pong",
    "πΈ": "Badminton",
    "π₯": "Boxing Glove",
    "π₯": "Martial Arts Uniform",
    "π₯": "Goal Net",
    "β³": "Flag in Hole",
    "βΈοΈ": "Ice Skate",
    "π£": "Fishing Pole",
    "π½": "Running Shirt",
    "πΏ": "Skis",
    "π·": "Sled",
    "π₯": "Curling Stone",
    "π―": "Direct Hit",
    "π±": "Pool 8 Ball",
    "βοΈ": "Chess Pawn",
    "πΉ": "Bow and Arrow"
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
