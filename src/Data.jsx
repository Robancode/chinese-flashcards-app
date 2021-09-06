import React, { useState } from "react";
import { chineseToEnglish } from "./data";

export const Data = () => {
  const [counter, setCounter] = useState(chineseToEnglish[0].key);

  // display the data with the key of card state
  return (
    <div>
      <button onClick={() => setCounter(counter + -1)}>previous</button>
      <button onClick={() => setCounter(counter + 1)}>next</button>
      <h1>{chineseToEnglish[counter].hanzi}</h1>
      <h1>{chineseToEnglish[counter].pinyin}</h1>
      <h2>{chineseToEnglish[counter].meaning}</h2>
    </div>
  );
};
