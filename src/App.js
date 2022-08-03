import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";

export default function App() {
  const [value, setValue] = useState("");
  const [chips, setchips] = useState(["Hello", "world"]);

  let chipSet = new Set(chips);

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // adding fuctionality for press backspace chips to deleted 
  const backspace = (i) => {chips.splice(i, 1);  setchips([...chips]);};

  // add chip functionality
  const addchip = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setchips([...chips, e.target.value]);
        console.log("add");
      }
      e.target.value = "";
    } else if (e.key === "Backspace") {
      e.target.value = "";
      backspace(chips.length - 1);
      console.log("Backspace key pressed");
    }
  };

  // remove chip functionality
  const removechip = (removedchip) => {
    const newchips = chips.filter((chip) => chip !== removedchip);
    setchips(newchips);
  };

  // adding functionality to add list of chips to inputfield
 const onSearch = (searchTerm) => {
    if (searchTerm === "") return null;
    else setchips([...chips, searchTerm]);
  };

  return (
    <div className="App">
      <div className="chip-container">
        {chips.map((chip, index) => {
          return (
            <div key={index} className="chip">
              {chip}
              <span onClick={() => removechip(chip)}>x</span>
            </div>
          );
        })}
        <input onKeyDown={addchip} onChange={onChange} />
        <Dropdown value={value} chipSet={chipSet} onSearch={onSearch} />
      </div>
    </div>
  );
}
